import os
import json

def update_json(file_path):
    try:
        with open(file_path, 'r') as file:
            data = json.load(file)

        if 'attributes' in data:
            data['attributes'].append({"trait_type": "race", "value": "white"})

            with open(file_path, 'w') as file:
                json.dump(data, file, indent=4)

        else:
            print(f"The file {file_path} does not have an 'attributes' key.")
    except Exception as e:
        print(f"An error occurred with file {file_path}: {e}")

def update_all_json_files(directory_path):
    for filename in os.listdir(directory_path):
        if filename.endswith('.json'):
            file_path = os.path.join(directory_path, filename)
            update_json(file_path)
            print(f"Updated file: {filename}")

# Replace 'your_directory_path' with the path to your directory containing the JSON files
update_all_json_files('/Users/razzak/Developer/projects/hashlips_art_engine_v/build/json')
