import axios from "axios";

// Here we call an endpoint of our choice
axios.get("/version").then((response) => {
  const scriptTag = document.createElement("script");
  const version = response.data;
  scriptTag.type = "text/javascript";
  scriptTag.async = true;
  scriptTag.defer = true;

  // Here we would use the version sent by the server
  // const source = `//e.video-cdn.net/v3/${version}/bundle.js`;
  const source = `//e.video-cdn.net/v2/embed.js`;
  console.log(source);
  scriptTag.src = source;

  const firstScriptTag = document.getElementsByTagName("script")[0];

  firstScriptTag.parentNode.insertBefore(scriptTag, firstScriptTag);
});
