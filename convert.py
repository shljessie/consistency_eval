import csv
import json
import os

# The path to the directory containing your CSV files
csv_directory_path = './mainchat_baseline/'

# The path to the directory where you want to save your JSON files
json_directory_path = './chat_data/baseline/'

# Ensure the JSON directory exists
os.makedirs(json_directory_path, exist_ok=True)

# List all files in the directory
for filename in os.listdir(csv_directory_path):
    if filename.endswith('.csv'):
        csv_file_path = os.path.join(csv_directory_path, filename)
        json_file_path = os.path.join(json_directory_path, filename.replace('.csv', '.json'))

        # Read the CSV file and convert it to a JSON format
        with open(csv_file_path, mode='r', encoding='utf-8') as infile, \
             open(json_file_path, mode='w', encoding='utf-8') as outfile:
            reader = csv.DictReader(infile)
            json_data = [row for row in reader]
            json.dump(json_data, outfile, ensure_ascii=False, indent=2)

        print(f'Converted {filename} to JSON')
