HTML에서 CSS를 적용하는 방법에는 **3가지 주요 방식**이 있습니다: **인라인 스타일**, **내부 스타일**(내장 스타일), 그리고 **외부 스타일**. 아래에 각 방식의 설명과 예시를 제공합니다.

---

### **1. 인라인 스타일 (Inline CSS)**

HTML 요소의 `style` 속성을 사용하여 CSS를 직접 작성합니다. 간단한 스타일링에 적합하지만, 유지보수가 어렵습니다.

#### **예시**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inline CSS Example</title>
</head>
<body>
    <h1 style="color: blue; text-align: center;">안녕하세요, 인라인 스타일!</h1>
    <p style="font-size: 16px; color: gray;">이것은 인라인 스타일로 작성된 CSS입니다.</p>
</body>
</html>
```

#### **장점**
- 빠르게 스타일을 적용할 때 유용.
- 간단한 요소에 대한 일회성 스타일링에 적합.

#### **단점**
- 코드가 복잡하고 유지보수가 어려움.
- HTML과 CSS가 분리되지 않아 가독성이 떨어짐.

---

### **2. 내부 스타일 (Internal CSS)**

HTML 문서의 `<style>` 태그에 CSS를 작성하여 여러 요소에 스타일을 적용합니다. 단일 HTML 파일에 스타일을 지정할 때 유용합니다.

#### **예시**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Internal CSS Example</title>
    <style>
        body {
            background-color: #f0f8ff;
            font-family: Arial, sans-serif;
        }
        h1 {
            color: blue;
            text-align: center;
        }
        p {
            font-size: 16px;
            color: gray;
        }
    </style>
</head>
<body>
    <h1>안녕하세요, 내부 스타일!</h1>
    <p>이것은 내부 스타일로 작성된 CSS입니다.</p>
</body>
</html>
```

#### **장점**
- 스타일이 HTML 파일 내부에 있어 빠르게 수정 가능.
- 동일 문서에서 여러 요소를 스타일링할 수 있음.

#### **단점**
- 외부 파일과의 스타일 재사용이 어려움.
- 큰 프로젝트에서 스타일이 분리되지 않아 관리가 복잡.

---

### **3. 외부 스타일 (External CSS)**

CSS를 별도의 `.css` 파일에 작성하고 HTML 문서의 `<link>` 태그로 참조합니다. 대규모 프로젝트에서 가장 선호되는 방식입니다.

#### **예시**
**HTML 파일 (`index.html`):**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>External CSS Example</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>안녕하세요, 외부 스타일!</h1>
    <p>이것은 외부 스타일로 작성된 CSS입니다.</p>
</body>
</html>
```

**CSS 파일 (`styles.css`):**
```css
body {
    background-color: #f0f8ff;
    font-family: Arial, sans-serif;
}

h1 {
    color: blue;
    text-align: center;
}

p {
    font-size: 16px;
    color: gray;
}
```

#### **장점**
- 스타일과 HTML이 분리되어 가독성이 높아짐.
- 여러 HTML 파일에서 스타일을 재사용 가능.
- 큰 프로젝트에서 관리와 유지보수에 적합.

#### **단점**
- HTML 파일을 보더라도 스타일 정보를 바로 알 수 없음.
- 별도의 CSS 파일을 로드하므로 초기 로딩 시간이 약간 증가.

---

### **CSS 적용 방식 비교**

| **특징**                | **인라인 스타일**                  | **내부 스타일**           | **외부 스타일**          |
|-------------------------|-----------------------------------|-------------------------|-------------------------|
| **적용 위치**           | HTML 요소의 `style` 속성          | `<style>` 태그 내부      | 별도 `.css` 파일        |
| **재사용 가능성**       | 낮음                              | 중간                    | 높음                    |
| **유지보수**            | 어려움                            | 보통                    | 용이                    |
| **프로젝트 크기 적합성** | 소규모                            | 중소규모                | 중대규모                |

---

### **추천 학습 순서**
1. **기본 개념**: 인라인 스타일 → 내부 스타일 → 외부 스타일 순으로 학습.
2. **실습**: 각 방법을 사용해 HTML 문서에 스타일 적용.
3. **실제 프로젝트 적용**: 외부 스타일 방식을 주로 사용.

CSS는 외부 스타일 방식으로 작성하는 것이 가장 효율적이며, 실무에서도 널리 사용됩니다.


외부 스타일 CSS에서 `id`와 `class`는 특정 HTML 요소에 스타일을 적용하거나 구분하는 데 사용됩니다. 각 속성의 역할과 차이점을 간략히 설명하겠습니다.

---

### **1. ID**
- **특정한 요소 하나를 고유하게 식별**하기 위해 사용됩니다.
- CSS에서 `#` 기호를 사용하여 ID를 선택합니다.
- **ID는 문서 내에서 고유**해야 합니다. (하나의 HTML 문서에 같은 ID를 여러 번 사용할 수 없습니다.)

#### **HTML 예시**
```html
<div id="header">헤더 영역</div>
```

#### **CSS 예시**
```css
#header {
    background-color: lightblue;
    color: white;
    padding: 10px;
}
```

#### **사용 상황**
- 페이지에서 특정 요소에만 스타일을 적용할 때.
- JavaScript와 함께 특정 요소를 조작할 때 유용.

---

### **2. Class**
- **여러 요소에 동일한 스타일을 적용**할 때 사용됩니다.
- CSS에서 `.`(점) 기호를 사용하여 Class를 선택합니다.
- 한 요소에 여러 개의 클래스를 사용할 수 있습니다.

#### **HTML 예시**
```html
<div class="box">첫 번째 박스</div>
<div class="box">두 번째 박스</div>
```

#### **CSS 예시**
```css
.box {
    border: 1px solid gray;
    padding: 20px;
    margin: 10px;
    background-color: lightgray;
}
```

#### **사용 상황**
- 동일한 스타일을 여러 요소에 적용할 때.
- CSS에서 요소 그룹을 정의하거나 재사용 가능한 스타일을 만들 때.

---

### **ID와 Class의 차이점**

| **특징**                | **ID**                              | **Class**                          |
|-------------------------|-------------------------------------|------------------------------------|
| **선택자 기호**          | `#`                                 | `.`                               |
| **적용 대상**            | 한 요소에만 적용 (고유)             | 여러 요소에 적용 가능             |
| **사용 목적**            | 특정 요소를 고유하게 식별           | 공통 스타일을 여러 요소에 적용    |
| **사용 제한**            | 문서 내에서 중복될 수 없음          | 여러 요소에서 반복적으로 사용 가능|
| **우선 순위**            | ID가 Class보다 우선 순위가 높음      | ID보다 우선 순위가 낮음           |

---

### **3. 함께 사용하는 예시**
ID와 Class를 조합하여 스타일을 더욱 세부적으로 지정할 수 있습니다.

#### **HTML**
```html
<div id="main-container" class="box">메인 컨테이너</div>
<div class="box">서브 컨테이너 1</div>
<div class="box">서브 컨테이너 2</div>
```

#### **CSS**
```css
/* ID로 스타일 적용 */
#main-container {
    background-color: lightblue;
    font-weight: bold;
}

/* Class로 스타일 적용 */
.box {
    padding: 20px;
    border: 1px solid gray;
    margin: 10px;
}
```

---

### **4. 권장 사항**
1. **ID는 고유 식별 목적으로만 사용**하고, 스타일링에는 주로 Class를 사용하세요.
2. ID와 Class를 혼합하여 특정 조건에만 적용하는 스타일링을 작성할 수 있습니다.
3. CSS 우선 순위 체계를 이해하고, 불필요한 `!important` 사용을 피하세요. 

ID는 특정 요소의 구분에, Class는 그룹화된 스타일 적용에 적합합니다. 이런 방식으로 HTML 요소를 효율적으로 관리하세요!