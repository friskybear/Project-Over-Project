use serde_json::{json, Value};

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn csv_to_json(data: String) -> String {
    let mut reader = data.lines();
    let first_line = match reader.next() {
        Some(line) => line,
        None => return "error: failed to read header".to_owned(),
    };
    let header: Vec<&str> = first_line.split(",").collect();
    // Read the remaining rows
    let mut records: Vec<Value> = Vec::new();
    for line in reader {
        if line.trim().is_empty() {
            continue; // Skip empty lines
        }
        let record: Vec<&str> = line.split(',').collect();
        if record.len() != header.len() {
            return "error: failed to read a row".to_owned();
        }
        let json_record: serde_json::Map<String, Value> = header
            .iter()
            .enumerate()
            .map(|(i, h)| (h.to_string(), Value::from(record[i].to_string())))
            .collect();
        records.push(Value::Object(json_record));
    }
    // Return the records as a JSON array
    serde_json::to_string(&records).unwrap_or_else(|_| "error: failed to convert to JSON".to_owned())
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![csv_to_json])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
