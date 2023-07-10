---
title: "제너레이터를 활용한 지연평가"
date: "2023-07-20"
category: "javascript"
tag: "es6Plus"
---

## 제너레이터를 활용한 지연평가에 대해 알아봅시다.

ES6에서 도입된 제너레이터와 이터레이터 프로토콜은 지연평가(Lazy Evaluation)를 가능하게 하여 코드를 값으로 다루고, 안전하게 조합할 수 있는 기능을 제공합니다.

>지연평가는 게으르다는 표현도 쓰지만, 영리한 평가라는 말도 씁니다. 그만큼 가장 필요할때까지 평가를 미루다가 정말 필요할때 값을 평가합니다

기존의 JavaScript에서는 지연평가를 위한 기본 프로토콜이 없어서 라이브러리나 함수를 사용하여 비슷한 동작을 구현해야 했습니다. 하지만 ES6에서 제너레이터와 이터레이터 프로토콜이 도입되면서 이런 기능들을 표준화하고 언어 자체에서 지원하게 되었습니다. 제너레이터 함수를 통해 이터레이터를 생성하고, 이터레이터를 통해 값을 지연적으로 평가할 수 있습니다.

또한, 이터레이터와 함께 사용되는 고차 함수인 map, filter, reduce, take 등을 이용하여 이터레이블 중심 프로그래밍, 리스트 중심 프로그래밍, 컬렉션 중심 프로그래밍 등의 기법을 구현할 수 있습니다. 이러한 기법은 데이터를 처리하는 과정을 추상화하고 합성 가능한 작은 단위로 분해하여 코드의 가독성과 유지보수성을 높여줍니다.

따라서, 제너레이터와 이터레이터를 활용한 지연평가는 ES6 이전에 비해 코드를 값으로 다루는 것을 훨씬 간편하게 만들어주고, 다양한 고차 함수를 통해 유연하고 안전한 조합성을 제공합니다.


![](https://velog.velcdn.com/images/boyeon_jeong/post/ffd37762-908d-46ed-985c-8402f7359b06/image.png)
[제너레이터랑 지연평가](https://velog.io/@boyeon_jeong/%EC%A0%9C%EB%84%88%EB%A0%88%EC%9D%B4%ED%84%B0%EC%99%80-%EC%9D%B4%ED%84%B0%EB%A0%88%EC%9D%B4%ED%84%B0-%EC%9D%B4%ED%84%B0%EB%9F%AC%EB%B8%94-%EA%B0%9D%EC%B2%B4)

---

#### * 아래의 함수들을 사용합니다.
```javascript
const reduce = (f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
};


const go = (...args) => reduce((a,f)=>f(a), args);


```

---
## 1. range 함수로 일반 함수와 지연함수 비교하기
### 1. 일반 함수
1. 숫자의 크기만함 배열을 리터하는 range함수
2. 위 배열의 모든 값 더하는 함수

```javascript
const add = (a,b) => a+b;

const range = l => {
	let i = -1;
    let res = [];
    while(++i < l) {
    	res.push(i);
    }
    return res;
}

var list = range(4);
log(list);
log(reduce(add,list));
```

### 2. 지연 함수

1. 위 함수의 느긋한 버전
```javascript
const add = (a,b) => a+b;
const L = {};
L.range =function *(l) {
	let i = -1;
    while(++i < l) {
    	yield;
    }
}

var list = L.range(4);
log(list);
log(reduce(add,list));
```

### 3. 1번과 2번의 차이점

#### 3-1. return값

1번은 배열을 반환하고 2번은 이터레이터이다.
![](https://velog.velcdn.com/images/boyeon_jeong/post/8a217904-2dc6-4c33-9f65-68d0d6ee9fb5/image.png)


#### 3-2. next()를 해야 내부 while가 실행된다.

1번은 `var list = range(4);` 이때 이미 배열로 평가가 되지만, 2번은 `reduce(add,list)`여기로 들어가 직접 순회하기 전까지 평가되지 않는다.

![](https://velog.velcdn.com/images/boyeon_jeong/post/fc42960c-6349-4cae-9f20-1fca16a0031b/image.png)

#### 3-3. 성능차이

```javascript
function test(name, time, f) {
	console.time(name);
    while(time--) f();
    console.timeEnd(name);
}

test('range', 10, ()=>reduce(add,range(100000)));
test('L.range', 10, ()=>reduce(add,L.range(100000)));
```
![](https://velog.velcdn.com/images/boyeon_jeong/post/f52a0d6d-d366-4466-8bc6-614f04e7aab2/image.png)


---

## 2. 지연성을 가진 take
- 많은 값을 받아서 잘라주는 함수
```javascript
  const take = (l, iter) => {
    let res = [];
    for (const a of iter) {
      res.push(a);
      if (res.length == l) return res;
    }
    return res;
  };

  //일반함수로 만들어진 range(100) 이터레이터는 100을 전부 평가 후 2개를 자른다.
  console.log(take(5, range(100));
  //지연함수(제너레이터)로 만들어진 range(100) 이터레이터는 take 내부에서 `const a of iter` 될때 평가되기 때문에 2개만 만들어진다.    
  console.log(take(5, L.range(100));
  //지연함수로 만들어진 이터레이터는 무한수열을 줘도 가능하다.
  console.log(take(5, L.range(Infinity));
```
> 효율성도 지연함수가 좋음

![](https://velog.velcdn.com/images/boyeon_jeong/post/f9bb8e26-3ec2-4e50-8114-abd7b766475f/image.png)

### take 함수 curry로 만들어 go 함수 사용하기
```javascript
const take = curry((l, iter) => {
    let res = [];
    for (const a of iter) {
      res.push(a);
      if (res.length == l) return res;
    }
    return res;
  });
  console.time('');
  go(
    range(10000),
    take(5),
    reduce(add),
    log);
  console.timeEnd('');

  console.time('');
  go(
    L.range(10000),
    take(5),
    reduce(add),
    log);
  console.timeEnd('');
```

---

## 지연성을 가진 map

- 제너레이터/이터레이터 프로토컬 기반의 map
- L.map은 이터레이터를 반환하는 제너레이터이다.

```javascript
L.map = function *(f, iter) {
	for(const a of iter) yield f(a);
}

var it = L.map(a=>a+10, [1,2,3]);

console.log(it.next);
console.log([...it]);
```

![](https://velog.velcdn.com/images/boyeon_jeong/post/397cf43a-520d-478f-9a38-ffe1e62b4218/image.png)

---

## 지연성을 가진 filter

- 제너레이터/이터레이터 프로토컬 기반의 filter
- L.filter은 이터레이터를 반환하는 제너레이터이다.

```javascript
L.map = function *(f, iter) {
	for(const a of iter) if(f(a)) yield a;
}

var it = L.map(a=>a%2, [1,2,3,4]);

console.log(it.next);
console.log([...it]);
```
![](https://velog.velcdn.com/images/boyeon_jeong/post/c3d381a0-59df-459e-a2b5-92558b304dcf/image.png)

---

## 즉시평가되는 함수와 지연성 함수들 비교하기

### range, map, filter, take, reduce 중첩 함수 사용

> for of의 숨겨진 코드
![](https://velog.velcdn.com/images/boyeon_jeong/post/3af3f0c6-7f8c-49da-9540-37adc4c5e032/image.png)


```javascript
 const reduce = curry((f, acc, iter) => {
    if (!iter) {
      iter = acc[Symbol.iterator]();
      acc = iter.next().value;
    } else {
      iter = iter[Symbol.iterator]();
    }
    let cur;
    while (!(cur = iter.next()).done) {
      const a = cur.value;
      acc = f(acc, a);
    }
    return acc;
  });


const go = (...args) => reduce((a,f)=>f(a), args);

const curry = f => (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);

const range = l => {
    let i = -1;
    let res = [];
    while (++i < l) {
      res.push(i);
    }
    return res;
  };

  const map = curry((f, iter) => {
    let res = [];
    iter = iter[Symbol.iterator]();
    let cur;
    while (!(cur = iter.next()).done) {
      const a = cur.value;
      res.push(f(a));
    }
    return res;
  });

  const filter = curry((f, iter) => {
    let res = [];
    iter = iter[Symbol.iterator]();
    let cur;
    while (!(cur = iter.next()).done) {
      const a = cur.value;
      if (f(a)) res.push(a);
    }
    return res;
  });

  const take = curry((l, iter) => {
    let res = [];
    iter = iter[Symbol.iterator]();
    let cur;
    while (!(cur = iter.next()).done) {
      const a = cur.value;
      res.push(a);
      if (res.length == l) return res;
    }
    return res;
  });

  console.time('');
  go(range(100000),
    map(n => n + 10),
    filter(n => n % 2),
    take(10),
  log);
  console.timeEnd('');
```

### L.range, L.map, L.filter, take, reduce 중첩 함수 사용

```javascript
const reduce = curry((f, acc, iter) => {
    if (!iter) {
      iter = acc[Symbol.iterator]();
      acc = iter.next().value;
    } else {
      iter = iter[Symbol.iterator]();
    }
    let cur;
    while (!(cur = iter.next()).done) {
      const a = cur.value;
      acc = f(acc, a);
    }
    return acc;
  });


const go = (...args) => reduce((a,f)=>f(a), args);

const curry = f => (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);

  L.range = function* (l) {
    let i = -1;
    while (++i < l) {
      yield i;
    }
  };

  L.map = curry(function* (f, iter) {
    iter = iter[Symbol.iterator]();
    let cur;
    while (!(cur = iter.next()).done) {
      const a = cur.value;
      yield f(a);
    }
  });

  L.filter = curry(function* (f, iter) {
    iter = iter[Symbol.iterator]();
    let cur;
    while (!(cur = iter.next()).done) {
      const a = cur.value;
      if (f(a)) {
        yield a;
      }
    }
  });

  console.time('L');
  go(L.range(Infinity),
  L.map(n => n + 10),
  L.filter(n => n % 2),
  take(10),
  console.log);
  console.timeEnd('L');
```

---

## map, filter 계열 함수들이 가지는 결합 법칙

- 사용하는 데이터가 무엇이든
- 사용하는 보조 함수가 순수 함수라면 무엇이든
- 아래와 같이 결합한다면 둘 다 결과가 같다.

[[mapping, mapping], [filtering, filtering], [mapping, mapping]]

=

[[mapping, filtering, mapping],[mapping, filtering, mapping]]


이 결합 법칙은 함수형 프로그래밍에서 사용하는 데이터 변형 함수들이 어떤 순서로 결합되더라도 결과가 동일하다는 원리를 나타냅니다.

결합 법칙을 설명하기 위해 몇 가지 개념을 알아야 합니다. 먼저, "매핑(mapping)"은 데이터를 변형하는 작업을 의미하며, "필터링(filtering)"은 데이터를 걸러내는 작업을 의미합니다. 이러한 작업을 수행하는 함수들은 map과 filter 계열 함수들입니다.

결합 법칙은 다음과 같이 표현됩니다:

```
compose(map(f), map(g)) ≡ map(compose(f, g))

compose(filter(p), filter(q)) ≡ filter(compose(p, q))
```

여기서 `compose`는 함수 조합을 나타내는 함수입니다. `compose(f, g)`는 두 함수 `f`와 `g`를 조합하여 새로운 함수를 생성하는 역할을 합니다.

결합 법칙의 의미는 다음과 같습니다. 만약 데이터 변형 함수들을 일렬로 연결해서 사용한다면 (예: `compose(map(f), map(g))`), 또는 이들 함수를 합성하여 하나의 함수로 만든다면 (예: `map(compose(f, g))`), 그 결과는 동일하다는 것입니다. 즉, 함수들을 어떤 순서로 결합하더라도 최종적인 결과는 동일하다는 것을 보장합니다.

결합 법칙은 함수형 프로그래밍에서 코드의 가독성과 유지보수성을 높이는 데에 도움을 줍니다. 함수들을 결합하는 순서를 자유롭게 변경하거나 분해하여 재활용할 수 있기 때문입니다.






