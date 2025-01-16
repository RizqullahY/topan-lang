function arranger(problems, display_answers = false) {
    if (problems.length > 5) {
        return 'Error: Too many problems!';
    }

    let first_line = "";
    let second_line = "";
    let dashed = "";
    let answers = "";

    problems.forEach(problem => {
        let parts = problem.split(" ");
        if (parts.length !== 3) {
            throw new Error('Error: Invalid problem!');
        }

        let [num1, operator, num2] = parts;

        if (!['+', '-'].includes(operator)) {
            throw new Error("Error: Operator must be '+' or '-'.");
        }

        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Error: Numbers must only contain digits!');
        }

        if (num1.length > 4 || num2.length > 4) {
            throw new Error('Error: Numbers cannot be more than four digits.');
        }

        let max_length = Math.max(num1.length, num2.length);
        let width = max_length + 2;

        let top = num1.padStart(width);
        let bottom = operator + ' ' + num2.padStart(max_length);
        let line = "-".repeat(width);

        first_line += top + "    ";
        second_line += bottom + "    ";
        dashed += line + "    ";

        let result;
        if (operator === '+') {
            result = String(parseInt(num1) + parseInt(num2));
        } else {
            result = String(parseInt(num1) - parseInt(num2));
        }

        answers += result.padStart(width) + "    ";
    });

    let arranged_problems = first_line.trimEnd() + "\n" +
        second_line.trimEnd() + "\n" + dashed.trimEnd();

    if (display_answers) {
        arranged_problems += "\n" + answers.trimEnd();
    }

    return arranged_problems;
}

export default arranger;