import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
        //함수가 버튼 클릭이벤트로 전달이 되는 과정에서 this와 연결이 끊겨짐 방지
        //아래처럼 arrow function을 사용하면 bind 따로 안해줘도 됨
        this.handleDecrease = this.handleDecrease.bind(this);
        this.handleIncrease = this.handleIncrease.bind(this);
    }
    //컴포넌트 초기 생성 
    componentWillMount() {
        // 화면에 나가기 직전에 호출되는 API
        console.log('componentWillMount (deprecated');
    }
    componentDidMount() {
        //화면에 나타나게 됐을 때 호출 
        //용도
        //1. 외부 라이브러리 연동 (D3, masonry, etc)
        //2. 컴포넌트에 필요한 데이터 요청 (Ajax, GraphGl, etc..)
        //3. DOM에 관련된 설정 -> 스크롤 설정 ,크기 읽어오기 등
        console.log('componentDidMount...');

    }

    // 컴포넌트 업데이트
    componentWillReceiveProps() {
        //컴포넌트가 새로운 props를 받게 됐을 때, 호출
        //새로 받게될 props는 nextProps로 부터 조회할 수 있음
    }
    shouldComponentUpdate(nextProps, nextState) {
        //컴포넌트 최적화 작업 시 유용
        // React -> 변화가 발생하는 부분만 업제이트를 해줘서 성능 ㄱㅊ
            // 단, 변화가 발생한 부분만 감지해내기 위해 Virtual DOM에 한번그려줘야 함
            // 즉, 현재 컴포넌트 변화가 x. 부모 컴포넌트가 리렌더링되면 자식 컴포넌트도 리렌더링
        // 이 같은 현상을 방지하기 위해 사용
        // default return true
        // false  -> 해당 컴포넌트 render()호출 x 
        console.log('shouldComponentUpdate ...');
        if(nextState.number %5 === 0) return false;
        return true;
    }
    componentWillUpdate(nextProp, nextState) {
        //shouldComponentUpdate애서 true를 반환했을 때 호출
        //역할
            //1. 주로 애니메이션 효과 초기화
            //2. 이벤트 리스트 없애는 작업
        //이 함수 호출 후 render() 호출
        console.log('componentWillUpdate');
    }
    getSnapshotBeforeUpdate() {
        // render() -> getSnapshotBeforeUpdate() -> DOM 변화 -> componentDidUpdate()
        // 즉, DOM 업데이트 직전에 호출
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        //render() 호출 후 실행
        //this.props 와 this.state 바뀌어 있음. 
        // 파라미터를 통해 이전 값을 확인가능(prevProps, prevState)
        // getSnapBeforeUpdate 에서 반환한 snapshot값은 세번째 인자로 받아옴
        console.log('componentDidUpdate');
    }

    //컴포넌트 제거
    componentWillUnmount() {
        //이벤트, setTimeout, 외부 라이브러리 인스턴스 제거
    }

    //컴포넌트 에러 발생
    componentDidCatch() {
        //에러 발생시 componentDidCatch 실행
        //componet자신 render함수에서 에러가 발생하는건 잡을 수 없음. 자심 컴포넌트 내부에서 발생하는 에러들을 잡을 수 있음
        this.setState({
            error: true
        })
    }
    
    handleIncrease = () => {
        const {number} = this.state; 
        this.setState({
            number: number + 1
        })
    }

    handleDecrease = () => {
        this.setState(
            ({number}) => ({
                number: number - 1
            })
        )
    }

    render() {
        return (
            <div>
                <h1>카운터</h1>
                <div>값 {this.state.number}</div>
                {/* 이벤트이름을 설정할 때 camelCase로 작성해야 함. ex)onclick -> onClick */}
                <button onClick={this.handleDecrease}>-</button>
                <button onClick={this.handleIncrease}>+</button>
            </div>
        );
    }
}

export default Counter;