import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import type { RootState, AppDispatch } from './store';

// Provided by create-react-app redux-typescript template
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Homemade Hooks!
export type TCaseIDParams = { id: string }
export const useIdParam = () => Number(useParams<TCaseIDParams>().id)

export const useCaseFromIdParam = () => {
  const id = useIdParam();
  const history = useHistory();
  const whichCase = useAppSelector( state => state.cases.cases.find(c => c.id === id ))
  if (whichCase) return whichCase
  else history.push('/')
}