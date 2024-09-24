import { useEffect } from "react";

const JsSlider = () => {
    useEffect(() => {
        const imgPosition = document.querySelectorAll(".aspect-ratio-169 img");
        const imgContainer = document.querySelector('.aspect-ratio-169');
        const dotItem = document.querySelectorAll(".dot");
        let imgNumber = imgPosition.length;
        let index = 0;

        imgPosition.forEach(function(image, index) {
            image.style.left = index * 100 + "%";
            dotItem[index].addEventListener("click", function() {
                slider(index);
            });
        });

        function imgSlide() {
            index++;
            if (index >= imgNumber) {
                index = 0;
            }
            slider(index);
        }

        function slider(index) {
            imgContainer.style.left = "-" + index * 100 + "%";
            
            // Ensure there is always one active dot
            const dotActive = document.querySelector('.active');
            
            // Safety check: Only remove "active" if there is an element with "active" class
            if (dotActive) {
                dotActive.classList.remove("active");
            }

            dotItem[index].classList.add("active");
        }

        // Set the first dot to be active initially
        dotItem[0].classList.add("active");

        const interval = setInterval(imgSlide, 9000);

        // Cleanup the interval on component unmount
        return () => clearInterval(interval);

    }, []);

    return null;
};

export default JsSlider;
