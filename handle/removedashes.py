import os
from pathlib import Path

def remove_underscores(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if '-' in file:
                old_path = Path(root) / file
                new_file = file.replace('-', '')
                new_path = Path(root) / new_file
                os.rename(old_path, new_path)
                print(f'Renamed "{old_path}" to "{new_path}"')

# Replace '/path/to/directory' with the path to your directory
directory_path = '/Users/razzak/Developer/projects/hashlips_art_engine_v/layers'
remove_underscores(directory_path)
