import React, { Component } from "react";
import PhoneInfo from "./PhoneInfo";

class PhoneInfoList extends Component {
    static defaultProps = {
        data: [],
        onRemove: () => console.warn('onRemove not definded'),
        onUpdate: () => console.warn('onUpdate not definded'),
    }
    shouldComponentUpdate(nextProps, nextState) {
        //부모 컴포넌트가 수정이 되면 자식들 모두 리렌더링 됨
        //객체가 리랜더링 되는것을 방지하기 위해
        return nextProps.data !== this.props.data;
    }
    render() {
        console.log('rerender PhoneInfoList')
        const { data, onRemove, onUpdate } = this.props;
        const list = data.map(
            // key 는 리액트 배열을 렌더링 할 때 꼭 필요한 값
            // 배열을 렌더링 할 때 값을 통하여 업데이트 성능을 최적화
            // key를 부여하지 않을 경우 배열의 index 값ㅇ 자동으로 key로 설정
            // 데이터를 추가 할 때마다 고정적인 고유 값을 부여하면, 리액트가 변화를 감지

            info => (<PhoneInfo
                key={info.id}
                info={info}
                onRemove={onRemove}
                onUpdate={onUpdate}
            />)
        )
        return (
            <div>
                {list}
            </div>
        )
    }
};

export default PhoneInfoList;