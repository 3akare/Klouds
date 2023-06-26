export const SunSection = () => {
  const sun = document.createElement("section");
  sun.setAttribute(
    "class",
    "flex flex-row justify-between items-center rounded-sm w-full h-fit child-4 bg-white/20 shadow-sm backdrop:blur-sm border-white/20 border"
  );
  sun.innerHTML = `
    <div class="flex flex-col items-center justify-center space-y-4 p-2 m-2">
        <h2>
          Sunrise
        </h2>
        <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_xcvaucib.json"  background="transparent"  speed="1"  style="width: 150px; height: 150px;" hover loop autoplay class="z-10"></lottie-player>
        <time>
          06:25
        </time>
    </div>
    <div class="flex flex-col items-center justify-center space-y-4 p-2 m-2">
        <h2>
          Sunset
        </h2>
        <lottie-player src="https://lottie.host/f47d6cb6-d815-4968-942b-d69dd7a27a69/IWWN9FDh3s.json"  background="transparent"  speed="1"  style="width: 150px; height: 150px;" hover loop autoplay></lottie-player>
        <time>
          06:25
        </time>
    </div>
  `;
  return sun;
};
