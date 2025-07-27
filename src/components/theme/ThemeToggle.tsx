import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../store/store";
import { setSecondaryColor } from "../../api/themeSlice";
import { THEME_COLORS } from "../../utils/theme";
import { MdOutlinePalette } from "react-icons/md";

const ThemeToggle = () => {
  const dispatch = useDispatch<AppDispatch>();
  const selectedColor = useSelector(
    (state: RootState) => state.theme.secondaryColor
  );

  const colors = Object.values(THEME_COLORS);

  const toggleColor = () => {
    const currentIndex = colors.indexOf(selectedColor);
    const nextIndex = (currentIndex + 1) % colors.length;
    dispatch(setSecondaryColor(colors[nextIndex]));
    document.documentElement.style.setProperty(
      "--secondary-color",
      colors[nextIndex]
    );
  };

  return (
    <button
      onClick={toggleColor}
      aria-label="Toggle secondary color"
      className={`
        fixed left-0 top-1/3
        flex items-center justify-center
        w-12 h-12
        rounded-r-lg
        shadow-lg
        transition-colors duration-300 ease-in-out
        focus:shadow-outline
        text-white
        cursor-pointer
      `}
      style={{ backgroundColor: selectedColor }}
    >
      {/* Use React Icon instead of SVG */}
      <MdOutlinePalette size={24} aria-hidden="true" />
      <span className="sr-only">Toggle secondary color</span>
    </button>
  );
};

export default ThemeToggle;
