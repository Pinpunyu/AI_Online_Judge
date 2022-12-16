var editor = ace.edit('editor');
editor.setAutoScrollEditorIntoView(true);
editor.setTheme("ace/theme/idle_fingers");
editor.getSession().setMode("ace/mode/java");

const cSource = "\
// Powered by Judge0\n\
#include <stdio.h>\n\
\n\
int main(void) {\n\
    printf(\"Hello Judge0!\\n\");\n\
    return 0;\n\
}\n\
";

const cppSource = "\
#include <iostream>\n\
\n\
int main() {\n\
    std::cout << \"hello, world\" << std::endl;\n\
    return 0;\n\
}\n\
";

const javaSource = "\
public class Main {\n\
    public static void main(String[] args) {\n\
        System.out.println(\"hello, world\");\n\
    }\n\
}\n\
";


function setLanguage(Language) {
	// editor.setTheme("ace/theme/cobalt");

	switch(Language){

		case "c":
			editor.getSession().setMode("ace/mode/c_cpp");
			editor.setValue(cSource);
			break;

		case "cpp":
			editor.getSession().setMode("ace/mode/c_cpp");
			editor.setValue(cppSource);
			break;

		case "java":
		editor.getSession().setMode("ace/mode/java");
			editor.setValue(javaSource);
			break;
	}
} 




/*
	'dracula' => 'Dracula',
	'gruvbox' => 'Gruvbox',讚
	'idle_fingers' => 'idle Fingers',一般的



let editor = document.querySelector("#editor");


ace.edit(editor, {
  theme: "ace/theme/cobalt",
  mode: "ace/mode/python",
});



*/
// C or C++ : c_cpp
// Java : java
// Python : python
