var editor = ace.edit('editor');
editor.setAutoScrollEditorIntoView(true);
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/java");
const annotation = "\
/* \n\
 * Author 		: Pinpunyu , YuiArthur , A1095551 , A1095552\n\
 * Project Name : Online Judge with AI suggest\n\
 */\n\n";

const cSource = "\
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
			editor.setValue(annotation + cSource);
			document.getElementById("c").style.backgroundColor="#ebdab4";
			document.getElementById("cpp").style.backgroundColor="#3c3836";
			document.getElementById("java").style.backgroundColor="#3c3836";
			break;

		case "cpp":
			editor.getSession().setMode("ace/mode/c_cpp");
			editor.setValue(annotation + cppSource);
			document.getElementById("c").style.backgroundColor="#3c3836";
			document.getElementById("cpp").style.backgroundColor="#ebdab4";
			document.getElementById("java").style.backgroundColor="#3c3836";
			break;

		case "java":
			editor.getSession().setMode("ace/mode/java");
			editor.setValue(annotation + javaSource);
			document.getElementById("c").style.backgroundColor="#3c3836";
			document.getElementById("cpp").style.backgroundColor="#3c3836";
			document.getElementById("java").style.backgroundColor="#ebdab4";
			break;
	}
} 


setLanguage("c");

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
