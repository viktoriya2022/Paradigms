// ===== Императивный метод =====
// Пузырьковая сортировка
// Используется два вложенных цикла. Каждый раз, когда выполняется итерация, верхняя граница уменьшается на единицу.

const arr = [5,8,0,-6,3,1,0]
function bubbleSortConcept1(arr) {
    for (let j = arr.length - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
            if (arr[i] < arr[i + 1]) {
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
            }
        }
    } return arr
}
console.log(bubbleSortConcept1(arr))


// ===== Декларативный метод =====
// Простая сортировка (метод sort), сравнение элементов как числа

arr = [5,8,1,6,2]
arr.sort((a, b) => b - a);
// Выводим отсортированный по убыванию массив в консоль
console.log(arr);