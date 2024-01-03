import os
from pathlib import Path

def remove_hash_one(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if '#1' in file:
                old_path = Path(root) / file
                new_file = file.replace('#1', '')
                new_path = Path(root) / new_file
                os.rename(old_path, new_path)
                print(f'Renamed "{old_path}" to "{new_path}"')

# Replace '/path/to/directory' with the path to your directory
directory_path = '/Users/razzak/Developer/projects/hashlips_art_engine/layers'
remove_hash_one(directory_path)
