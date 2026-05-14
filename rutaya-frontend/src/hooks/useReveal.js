import { useEffect } from "react";

function useReveal(dependencias = []) {

  useEffect(() => {

    const elementos =
      document.querySelectorAll(".reveal");

    elementos.forEach((el) => {
      el.classList.remove("active");
    });

    const observer =
      new IntersectionObserver(

        (entries) => {

          entries.forEach((entry) => {

            if (entry.isIntersecting) {

              entry.target.classList.add("active");

            }

          });

        },

        {
          threshold: 0.15,
        }
      );

    elementos.forEach((el) =>
      observer.observe(el)
    );

    return () => observer.disconnect();

  }, dependencias);
}

export default useReveal;

