# 리액트 학습

참고 : [velopert]: (https://velopert.com/reactjs-tutorials)

### 배열 다루기 생성과 렌더링(1)

- 리액트에서 state 내부값을 직접적으로 수정하면 안됨 => **불변성 유지**
- push, slice, unshift, pop (부적절 -> 직접 수정하기 때문)
- concat, slice, map, filter (적절 -> 새 배열을 반환 하기 때문)

#### 배열 렌더링
- **key** 는 리액트 배열을 렌더링 할 때 꼭 필요한 값
- 배열을 렌더링 할 때 값을 통하여 업데이트 성능을 최적화
- key를 부여하지 않을 경우 배열의 index 값을 자동으로 key로 설정
- 데이터를 추가 할 때마다 고정적인 고유 값을 부여하면, 리액트가 변화를 감지

```javascript
//PhoneInfoList.js
 const list = data.map(  
    info => (<PhoneInfo key={info.id} info={info}></PhoneInfo>)
)

```
#### 불변성

```javascript
const array = [1,2,3,4];
const sameArray = array;
sameArray.push(5);

console.log(array !== sameArray); // false

```
> call by reference
>> 같은 주소값을 가리키고 있기 때문

```javascript
const array = [1,2,3,4];
const differentArray = [...array, 5];
  // 혹은 = array.concat(5)
console.log(array === differentArray); // true

```
>불변성 유지


