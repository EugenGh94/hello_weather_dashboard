// Only Live Server and Domain can use the worker from browser
const ALLOWED_ORIGINS = ["http://127.0.0.1:5500", "https://helloweather.info"];


// OpenWeather endpoints used
const ALLOWED_PATHS = [
  "/geo/1.0/direct",
  "/data/2.5/weather",
  "/data/3.0/onecall",
];


// 
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = request.headers.get("Origin");


	//
    if (!ALLOWED_PATHS.includes(url.pathname)) {
      return new Response("Not found", { status: 404 });
    }


	// Builds OpenWeather url based on front-end path
    const target = new URL("https://api.openweathermap.org" + url.pathname);


	// Copies everything after "?" so my path variables work
    target.search = url.search;


	// Adds the API key 
    target.searchParams.set("appid", env.OPENWEATHER_KEY);


	// Worker calls endopoint and waits for answer
    const apiResponse = await fetch(target);


	//
    const headers = new Headers({ "Content-Type": "application/json" });


	// Tells the browser which pages is allowed to read the response
    if (ALLOWED_ORIGINS.includes(origin)) {
      headers.set("Access-Control-Allow-Origin", origin);
    }


	// Builds and sends the response to front-end
    return new Response(apiResponse.body, {
      status: apiResponse.status,
      headers,
    });
  },
};
