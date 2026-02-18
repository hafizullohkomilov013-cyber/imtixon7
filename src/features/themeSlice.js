import { createSlice } from "@reduxjs/toolkit";
const savedTheme = localStorage.getItem("theme");
const themeSlice = createSlice({
  name: "theme",
  initialState: savedTheme === "dark",
  reducers: {
    toggleTheme: (state) => {
      const newTheme = !state;
      localStorage.setItem("theme", newTheme ? "dark" : "light");
      if (newTheme) {
        document.body.classList.add("dark-body");
      } else {
        document.body.classList.remove("dark-body");
      }
      return newTheme;
    },
  },
});
export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
