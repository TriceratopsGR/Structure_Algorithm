// 给定一个只包括'(',')','{','}','[',']'的字符串s,判断字符串是否有效
// 左括号必须用相同类型的右括号闭合
// 左括号必须以正确的顺序闭合
// 每个右括号都有一个对应的相同类型的左括号
import ArrayStack from "./02_实现栈结构Stack(重构)";

function isValid(s: String): boolean {
  // 1.创建一个栈 用于存放余数
  const stack = new ArrayStack<string>();

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    switch (c) {
      case "(":
        stack.push(")");
        break;
      case "{":
        stack.push("}");
        break;
      case "[":
        stack.push("]");
        break;
      default:
        if (c !== stack.pop()) return false;
        break;
    }
  }
  return stack.isEmpty();
}

console.log(isValid("{[]()}({})"));
console.log(isValid("({}[]"));
export {};
