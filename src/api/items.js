import { instance } from './axios';

function fetchPreviewItems(type) {
  return instance.get(`/api/items/preview/${type}`);
}

function fetchItems(type, name) {
  return instance.get(`/api/items/${type}/${name}`);
}

export { fetchPreviewItems, fetchItems };
