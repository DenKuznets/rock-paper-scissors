import { CHOICE_TESTID_SUFFIXES } from "./Choice";

const getChoiceTestIds = (role: string) => {
    return {
        [`${role}${CHOICE_TESTID_SUFFIXES.container}`]: `${role}${CHOICE_TESTID_SUFFIXES.container}`,
        [`${role}${CHOICE_TESTID_SUFFIXES.coloredBorder}`]: `${role}${CHOICE_TESTID_SUFFIXES.coloredBorder}`,
        [`${role}${CHOICE_TESTID_SUFFIXES.image}`]: `${role}${CHOICE_TESTID_SUFFIXES.image}`,
        [`${role}${CHOICE_TESTID_SUFFIXES.imageBackground}`]: `${role}${CHOICE_TESTID_SUFFIXES.imageBackground}`,
    };
};

export default getChoiceTestIds;
