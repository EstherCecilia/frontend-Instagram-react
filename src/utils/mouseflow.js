export const TAG_KEY = 'tag';
export const FEEDBACK_SURVEY_KEY = 'activateFeedback';

const getInstance = () => {
  // @ts-expect-error type of window does not have _mfq
  window._mfq = window._mfq || [];
  // @ts-expect-error type of window does not have _mfq
  return window._mfq;
};

export const addRecordingTag = (tag) => {
  getInstance().push([TAG_KEY, tag]);
};

export const addRecordingTagIfNotPresent = (tag) => {
  const mfqArray = getInstance();
  if (
    mfqArray?.filter((item) => item?.[0] === TAG_KEY && item?.[1] === tag)
      ?.length === 0
  ) {
    addRecordingTag(tag);
  }
};
