import create from 'zustand';
import { debounce } from 'lodash';
import axios from "axios";


const useStore = create((set) => ({
    languages: [
        {language: "English" , initials: "en"},
        {language: "French" , initials: "fr"},
        {language: "Spanish" , initials: "es"},
        {language: "Italian" , initials: "it"},
    ],
    inputLanguage: "en",
    setInputLanguage: (newLanguage) => set(() => ({ inputLanguage: newLanguage })),
    outputLanguage: "fr",
    setOutputLanguage: (newLanguage) => set(() => ({ outputLanguage: newLanguage })),
    inputText: 'Hello, How are you?',
    setInputText: (newText) => set(() => ({inputText : newText})),
    translatedText: '',
    translateText: debounce(async (text, inputLang, outputLang) => {
        const response = await axios.get(
          `https://api.mymemory.translated.net/get?q=${text}&langpair=${inputLang}|${outputLang}`
        );
        const data = await response.data;
        set({ translatedText: text !== '' ? data.responseData.translatedText : 'Please enter text to be translated...'});
    }, 1000),
}));

export default useStore;
