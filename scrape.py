import os
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin

def create_directory(directory):
    if not os.path.exists(directory):
        os.makedirs(directory)

def download_image(url, folder_path, filename):
    response = requests.get(url, stream=True)
    if response.status_code == 200:
        with open(os.path.join(folder_path, filename), 'wb') as file:
            for chunk in response.iter_content(1024):
                file.write(chunk)
    else:
        print(f"Failed to download {url}")

def scrape_images_from_website(url, folder_path):
    # Create directory if it doesn't exist
    create_directory(folder_path)

    # Request the webpage
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')

    # Find all image tags
    img_tags = soup.find_all('img')

    # Download each image
    for img in img_tags:
        img_url = img.get('src')
        if not img_url:
            continue
        # Handle relative URLs
        img_url = urljoin(url, img_url)
        filename = os.path.basename(img_url)
        try:
            download_image(img_url, folder_path, filename)
            print(f"Downloaded {filename}")
        except Exception as e:
            print(f"Could not download {img_url}. Error: {e}")

if __name__ == "__main__":
    website_url = "https://www.kagati.nl"  # Replace with the target website URL
    save_folder = "downloaded_images"
    scrape_images_from_website(website_url, save_folder)
