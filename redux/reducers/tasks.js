// 기본개념

// 프로젝트의 상태에 변화를 일으키는 것을 액션이라고 함.

// 상태(state)에 변화가 필요하면 액션이란 것이 발생한다. 이는 하나의 객체. 액션 객체는 type필드를 가지고 있으며, 이 값이 액션 객체의 이름.

// 액션 생성 함수(action creator)는 액션 객체를 만들어주는 함수이다.
// /actions/tasks.js

// createAction으로 액션을 만들면 액션에 필요한 추가 데이터는 payload라는 이름을 사용.

// 리듀서는 변화를 일으키는 함수, 사용자가 액션 객체를 발생시키면 리듀서가 현재 상태와 전달받은 액션 객체를 파라미터로 받아온다. 그리고 두 값을 참고하여 새로운 상태를 만들어서 반환한다.
// 

// 디스패치(dispatch)는 '액션을 발생시키는 것', dispatch(action)형태로 액션 객체를 파라미터로 넣어서 호출. 이 함수가 호출되면 스토어는 리듀서 함수를 실행해 새로운 상태(state)를 생성

// 구독(subscribe) 함수 안에 리스너 함수를 파라미터로 넣어서 호출해 주면, 해당하는 리스너 함수가 액션이 디스패치되어 상태가 업데이트될때마다 호출된다.

// useSelector Hook을 사용하면 Redux의 상태를 조회할 수 있다.
// const 결과 = useSelector(상태 선택 함수 ex: state => state.counter.number)

// useDispatch Hook은 컴포넌트 내부에서 스토어의 내장 함수 dispatch를 사용할 수 있게 해준다.
// const dispatch = usdDispatch();
// dispatch({type: 'SAMPLE_ACTION'});

// 컴포넌트 성능을 최적화하고자 한다면 useCallback으로 액션을 디스패치하는 함수를 감싸준다.


// ======================================================================
// 동작의도:
// redux를 이용하여 데이터를 일괄 로드 후 일괄 적용(현재는 각 아이콘에서 하나하나 storage에서 데이터를 받아 처리)

// 기본설계(임시):
// redux 기본패턴(actions와 reducers, constants를 분리) 이용(cf: Ducks구조: Action Type, Action Creator, Reducer를 하나에 몰아서 다 작성하는 구조(module이라고 함))

// 기본동작(예정):
// ADD_TASK(임시) => state 중 isTrue값 1 대입
// REMOVE_TASK(임시) => state 중 isTrue값 0 대입


// ======================================================================
// Q.
// 현재 데이터를 저장하는 구조 [[key, {...value}],[key, {...value}],[key, {...value}], ...]는 그대로 활용할 수 있는지, 안된다면 어떻게 바꿔야 하는지?

// dispatch를 손대는 부분의 현재의 item데이터는 list.js에서 불러오는 데이터. 이 데이터에 손을 대봤자 아무런 의미가 없는데.


import {DATABOX} from '../../shared/weeklydata'




const tasks = (state = DATABOX, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      
      return [
        ...state,
        console.log(...state),
        {
          ...action.payload
        }
      ]
    case 'FETCH_TASKS_SUCCEEDED':
      return [
        ...action.payload
      ]    
      case 'REMOVE_TASK':
      return [
        ...state.filter(item => item.id != action.payload)
      ]
    default:
      return state
  }
}

export default tasks