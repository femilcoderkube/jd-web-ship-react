import { useEffect, useRef } from "react";

const SvgInline = ({ src, id, className, alt }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    if (!src || !svgRef.current) return;

    const fetchSvg = async () => {
      try {
        const response = await fetch(src);
        if (!response.ok) throw new Error(`Failed to fetch SVG: ${src}`);
        const text = await response.text();

        // Parse SVG content
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text, "text/xml");
        const svg = xmlDoc.querySelector("svg");

        if (!svg) {
          console.warn(`No SVG found in ${src}`);
          return;
        }

        // Transfer attributes
        if (id) svg.setAttribute("id", id);
        if (className) svg.setAttribute("class", `${className} replaced-svg`);

        // Remove invalid XML attributes
        svg.removeAttribute("xmlns:a");

        // Replace the placeholder div with the SVG
        const parent = svgRef.current.parentNode;
        if (parent) {
          parent.replaceChild(svg, svgRef.current);
        }
      } catch (error) {
        console.error("Error inlining SVG:", error);
      }
    };

    fetchSvg();

    // Cleanup: No need to remove SVG as it's replaced in the DOM
    return () => {};
  }, [src, id, className]);

  return <div ref={svgRef} className="svg-placeholder" />;
};

export default SvgInline;
