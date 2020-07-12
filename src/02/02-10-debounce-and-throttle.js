// Debounce
// 지연 처리 방법 중 하나로 입력을 받는 동안 대기하다가 마지막 입력 이후 요청할 때 사용
// 실습에서 export 주석 제거
// export
function debounce(func, delay) {
    let inDebounce;
    return function (...args) {
        if (inDebounce) {
            clearTimeout(inDebounce);
        }

        inDebounce = setTimeout(() => func(...args), delay);
    };
}

const run = debounce(val => console.log(val), 2000);
run('a');
run('b');
run('2');

// Throttle
// 디바운스와 비슷하지만, 입력되는 동안 바로 이전에 요청한 작업을 주기적으로 실행하는 점이 다름.
function throttle(func, delay) {
    let lastFunc;
    let lastRan;

    return function (...args) {
        const context = this;

        if (!lastRan) {
            func.call(context, ...args);
            lastRan = Date.now();
        } else {
            if (lastFunc) {
                clearTimeout(lastFunc);
            }

            lastFunc = setTimeout(() => {
                if ((Date.now() - lastRan) >= delay) {
                    func.call(context, ...args);
                    lastRan = Date.now();
                }
            }, delay - (Date.now() - lastRan));
        }
    };
}

var checkPosition = () => {
    const offset = 500;
    const currentScrollPosition = window.pageYOffset;
    const pageBottomPosition = document.body.offsetHeight - window.innerHeight - offset;

    if (currentScrollPosition >= pageBottomPosition) {
        console.log('다음 페이지 로딩');
    }
};

var infiniteScroll = throttle(checkPosition, 300);
window.addEventListener('scroll', infiniteScroll);