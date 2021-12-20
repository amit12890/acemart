import { cloneDeep, findIndex } from "lodash-es";

export const getDateString = (dateNumber) => {
    const dayCount = Number(dateNumber);

    if (!dayCount || dayCount < 0) {
        return "today";
    }
    if (dayCount < 31) {
        return `${dayCount} days ago`;
    }
    else if (dayCount <= 365) {
        return `${Math.round(dayCount / 30)} months ago`;
    }
    else {
        let months = Math.round((dayCount % 365) / 30);
        months = months ? `and ${months} months ago` : "";
        return `${Math.floor(dayCount / 365)} years ${months}`
    }
}

export const updateQuestionCountAction = (questionId, countType, count) => ({
    type: 'UPDATE_QUESTION_COUNT',
    payload: {questionId, countType, count}
})

export const updateAnswerCountAction = (questionId, answerId, countType, count) => ({
    type: 'UPDATE_ANSWER_COUNT',
    payload: {questionId, answerId, countType, count}
})

export function questionReducer(state, action) {
    switch (action.type) {
      case 'UPDATE_QUESTIONS':
        return {questions: [...action.payload]};

      case 'UPDATE_QUESTION_COUNT': {
          // payload : {questionId, countType: good/bad, count}
          let newQuestions = cloneDeep(state.questions)
          // find question from current state
          const updateInd = findIndex(newQuestions, ['id', action.payload.questionId])
          if (updateInd !== -1) {
              // update count
              newQuestions[updateInd][action.payload.countType] = action.payload.count
          }
        return {questions: newQuestions};
      }

      case 'UPDATE_ANSWER_COUNT': {
        // payload : {questionId, answerId, countType: good/bad, count}
        let newQuestions = cloneDeep(state.questions)
        // find question from current state
        const queInd = findIndex(newQuestions, ['id', action.payload.questionId])
        if (queInd !== -1) {
            // find answer from question
            let currAnsList = cloneDeep(newQuestions[queInd].answer)
            const ansInd = findIndex(currAnsList, ['id', action.payload.answerId])
            // update count
            currAnsList[ansInd][action.payload.countType] = action.payload.count
            newQuestions[queInd].answer = currAnsList
        }
      return {questions: newQuestions};
    }

      default:
        throw new Error();
    }
}