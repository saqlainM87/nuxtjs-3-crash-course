export default defineEventHandler(async () => {
  // handle query params
  // const { name } = getQuery(event);

  // handle post body data
  // const { age } = await readBody(event);

  // api call with private key
  const response: any = await $fetch(
    "https://jsonplaceholder.typicode.com/albums",
  );

  return response;
});
