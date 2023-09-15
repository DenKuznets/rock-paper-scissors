import { CHOICE_TESTID_SUFFIXES } from "./Choice";

const getChoiceTestIds = (role: string) => {
    return {
        [`${role}${CHOICE_TESTID_SUFFIXES.container}`]: `${role}${CHOICE_TESTID_SUFFIXES.container}`,
        [`${role}${CHOICE_TESTID_SUFFIXES.coloredBorder}`]: `${role}${CHOICE_TESTID_SUFFIXES.coloredBorder}`,
        [`${role}${CHOICE_TESTID_SUFFIXES.image}`]: `${role}${CHOICE_TESTID_SUFFIXES.image}`,
        [`${role}${CHOICE_TESTID_SUFFIXES.imageBackground}`]: `${role}${CHOICE_TESTID_SUFFIXES.imageBackground}`,
    };
};

export const choiceTestIds = (role: string) => {
    return {
        CHOICE_CONTAINER: `${role}_CHOICE_CONTAINER`,
        CHOICE_COLORED_BORDER: `${role}_CHOICE_COLORED_BORDER`,
        CHOICE_IMAGE: `${role}_CHOICE_IMAGE`,
        CHOICE_IMAGE_BACKGROUND: `${role}_CHOICE_IMAGE_BACKGROUND`,
    };
};

export default getChoiceTestIds;
