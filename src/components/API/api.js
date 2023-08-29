export async function fetchImagesBundle ({query, page}) {
    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '35927005-0d9b5dfd4ead8e82c902493f1';
    const perPage = 12;
    
    const responce = await fetch(
        `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
    );

    if (!responce.ok) {
        throw new Error('Something goes wrong')   
    }
    return responce.json();
}