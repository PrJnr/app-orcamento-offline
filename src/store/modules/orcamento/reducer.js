import produce from 'immer';

export default function orcamento(state = [], action) {
    switch (action.type) {
        case 'ADD_ORCAMENTO':
            return [...state, action.newOrcamento];
        case 'DELETE_ORCAMENTO':
            return produce(state, (draft) => {
                const index = draft.findIndex((o) => o.id === action.id.id);

                if (index !== -1) {
                    draft.splice(index, 1);
                }
            });

        default:
            return state;
    }
}
