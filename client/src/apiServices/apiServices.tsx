

// const baseURL = 'http://localhost:3000/'
// const serverURL = 'https://image-uploader-server-woad.vercel.app/';J
const baseURL = 'https://serverimage-uqp6.onrender.com/'

export async function uploadFile<File extends BodyInit | null | undefined>(my_file: File): Promise<string> {
  const response = await fetch(`${baseURL}addImage`, {
    method: 'POST',
    body: my_file,
  });

  if (!response.ok) {
    throw new Error('Request failed');
  }

  const responseData = await response.json();
  return responseData;
}
