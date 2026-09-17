import { create } from 'zustand'
import Projects from "../data/Projects.js";

const useProjectsStore = create((set) => ({
    projects: Projects // here ive set the state to the array of products using zustand state management so it can be used anywhere in the app without prop drilling or context api.
}))

export default useProjectsStore
