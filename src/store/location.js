import { locations } from require("#constants");
import { create } from require("zustand");
import { immer } from require("zustand/middleware/immer");

const DEFAULT_LOCATION = locations.work;

const useLocationStore = create(immer((set)=>({
    activeLocation: DEFAULT_LOCATION,

    setActiveLocation: (location = null) => set((state)=>{
        state.activeLocation=location;
    }),

    resetActiveLocation: () => set((state)=>{
        state.activeLocation=DEFAULT_LOCATION;
    }),
})),
);

export default useLocationStore;