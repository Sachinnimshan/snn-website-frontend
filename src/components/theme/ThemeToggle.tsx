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
      className="
  fixed right-0 top-20
  flex items-center justify-center
  w-12 h-12
  rounded-l-lg
  shadow-lg
  transition-colors duration-300 ease-in-out
  focus:shadow-outline
  text-white
  cursor-pointer
  bg-secondaryColor
  z-[3000]
"
    >
      <MdOutlinePalette size={24} aria-hidden="true" />
    </button>
  );
};

export default ThemeToggle;
