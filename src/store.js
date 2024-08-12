import create from 'zustand';

const useStore = create((set) => ({
    languages: [
        {language: "English" , initials: "en"},
        {language: "French" , initials: "fr"},
        {language: "Spanish" , initials: "es"},
        {language: "Turkish" , initials: "tr"},
    ],
    inputLanguage: "en",
    setInputLanguage: (newLanguage) => set(() => ({ inputLanguage: newLanguage })),
    outputLanguage: "fr",
    setOutputLanguage: (newLanguage) => set(() => ({ outputLanguage: newLanguage })),
    inputText: 'Hello, How are you?',
    setInputText: (newText) => set(() => ({inputText : newText})),
    getLanguagePair : () => {
        const state = useStore.getState();
        return `${state.inputLanguage}|${state.outputLanguage}`;
    },
    translatedText: '',
    setTranslatedText: (newText) => set(() => ({translatedText: newText})),
}));

export default useStore;
