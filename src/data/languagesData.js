const languages = [
  {
    id: "python",
    name: "Python",
    errors: ["IndentationError", "SyntaxError", "NameError", "TypeError"],
    errorDesc: {
      "IndentationError": "Code is not properly indented.",
      "SyntaxError": "Code has incorrect syntax.",
      "NameError": "Using a variable that is not defined.",
      "TypeError": "Operation on wrong data type."
    },
    program: `
# ❌ IndentationError
def say_hello():
print("Hello, world!")  # Wrong indentation

# ❌ SyntaxError (missing colon)
if True
    print("Python SyntaxError example")

# ❌ NameError
print(unknown_variable)

# ❌ TypeError
x = "5" + 10
`
  },
  {
    id: "c",
    name: "C",
    errors: ["Segmentation fault", "Compilation error", "Undefined reference", "Buffer overflow"],
    errorDesc: {
      "Segmentation fault": "Accessing invalid memory.",
      "Compilation error": "Code cannot compile due to syntax issues.",
      "Undefined reference": "Using a function or variable that is not defined.",
      "Buffer overflow": "Exceeding allocated array size."
    },
    program: `
/* ❌ Compilation Error: Missing semicolon */
#include <stdio.h>

int main() {
  printf("Hello C")  // Semicolon missing

  /* ❌ Undefined Reference */
  extern void someFunction();
  someFunction();

  /* ❌ Buffer Overflow */
  char arr[5] = "abcdef"; // Exceeds array size

  /* ❌ Segmentation Fault */
  int *ptr = NULL;
  *ptr = 10;  // Accessing NULL pointer
  return 0;
}
`
  },
  {
    id: "cpp",
    name: "C++",
    errors: ["Linker error", "Segmentation fault", "Template error", "Undefined behavior"],
    errorDesc: {
      "Linker error": "Function declared but not defined.",
      "Segmentation fault": "Invalid memory access.",
      "Template error": "Incorrect template usage.",
      "Undefined behavior": "Doing something unsafe, e.g., out-of-bounds access."
    },
    program: `
// ❌ Linker Error
void notDefinedFunction();

int main() {
  notDefinedFunction();

  /* ❌ Segmentation Fault */
  int* ptr = nullptr;
  *ptr = 100;

  /* ❌ Template Error */
  template<typename T>
  void func(T a) { std::cout << a << std::endl; }
  func();  // Missing argument

  /* ❌ Undefined Behavior */
  int arr[2] = {1, 2};
  std::cout << arr[5];  // Out of bounds
}
`
  },
  {
    id: "java",
    name: "Java",
    errors: ["NullPointerException", "ClassNotFoundException", "ArrayIndexOutOfBoundsException", "ArithmeticException"],
    errorDesc: {
      "NullPointerException": "Using an object that is null.",
      "ClassNotFoundException": "Trying to use a class that doesn't exist.",
      "ArrayIndexOutOfBoundsException": "Accessing array outside its range.",
      "ArithmeticException": "Invalid arithmetic operation, e.g., division by zero."
    },
    program: `
// ❌ NullPointerException
String text = null;
System.out.println(text.length());

// ❌ ClassNotFoundException
Class.forName("UnknownClassName");

// ❌ ArrayIndexOutOfBoundsException
int[] nums = {1, 2, 3};
System.out.println(nums[5]);

// ❌ ArithmeticException
int x = 5 / 0;
`
  },
  {
    id: "javascript",
    name: "JavaScript",
    errors: ["ReferenceError", "TypeError", "SyntaxError", "Cannot read property of null"],
    errorDesc: {
      "ReferenceError": "Using a variable that is not defined.",
      "TypeError": "Operation on wrong data type.",
      "SyntaxError": "Code has incorrect syntax.",
      "Cannot read property of null": "Trying to access a property of null."
    },
    program: `
// ❌ ReferenceError
console.log(notDeclaredVariable);

// ❌ SyntaxError
function testFunction( {
  console.log("Missing parenthesis");
}

// ❌ TypeError
let num = 10;
num(); // Trying to call a number

// ❌ Cannot read property of null
let element = null;
console.log(element.innerText);
`
  },
  {
    id: "r",
    name: "R",
    errors: ["object not found", "NA/NaN argument", "unexpected symbol", "eval error"],
    errorDesc: {
      "object not found": "Variable or object does not exist.",
      "NA/NaN argument": "Function receives missing or invalid value.",
      "unexpected symbol": "Code has invalid syntax.",
      "eval error": "Error evaluating invalid code."
    },
    program: `
# ❌ object not found
print(xyz)

# ❌ NA/NaN argument
log(NA)

# ❌ unexpected symbol
x <- 10 20  # Wrong syntax

# ❌ eval error
eval("invalid code")
`
  },
  {
    id: "rust",
    name: "Rust",
    errors: ["mismatched types", "cannot borrow as mutable", "lifetime mismatch", "unresolved import"],
    errorDesc: {
      "mismatched types": "Assigning value of wrong type.",
      "cannot borrow as mutable": "Trying to mutate an immutable reference.",
      "lifetime mismatch": "Returning reference to a value that is dropped.",
      "unresolved import": "Importing a module that does not exist."
    },
    program: `
// ❌ mismatched types
let x: i32 = "Hello";

// ❌ cannot borrow as mutable
let value = 10;
let ref = &value;
*ref = 20;

// ❌ lifetime mismatch
fn get_ref<'a>() -> &'a i32 {
    let temp = 10;
    &temp
}

// ❌ unresolved import
use unknown::module;
`
  },
  {
    id: "go",
    name: "Go",
    errors: ["panic: runtime error", "undefined function", "imported and not used", "syntax error"],
    errorDesc: {
      "panic: runtime error": "Code crashes at runtime, e.g., nil slice access.",
      "undefined function": "Calling a function that doesn't exist.",
      "imported and not used": "Imported package is not used.",
      "syntax error": "Code syntax is incorrect."
    },
    program: `
// ❌ undefined function
package main
import "fmt"

func main() {
  fmt.Printl("Hello") // Wrong function name

  // ❌ imported and not used
  import "math" // Never used

  // ❌ panic: runtime error
  var arr []int
  fmt.Println(arr[1]) // Access nil slice

  // ❌ syntax error
  if true {
  fmt.Println("Missing closing bracket")
}
`
  }
];

export default languages;
