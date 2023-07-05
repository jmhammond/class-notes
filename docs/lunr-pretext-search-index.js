var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  Discrete Math for Shockers - wichita.edu\/discretebook  http:\/\/wichita.edu\/discrete-book   copyright  "
},
{
  "id": "dedication-1",
  "level": "1",
  "url": "dedication-1.html",
  "type": "Dedication",
  "number": "",
  "title": "Dedication",
  "body": " To Dad. It's not an accounting book, but I did use a spreadsheet!  "
},
{
  "id": "acknowledgement-1",
  "level": "1",
  "url": "acknowledgement-1.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": " Special thanks goes to the Wichita State Open\/Alternative Textbook Initiative for their generous grant to help expand the text.  Many exercises come from Oscar Levin's Discrete Mathematics: An Open Introduction .  The material in section I first learned in Arthur Benjamin and Jennifer Quinn's Proofs that Really Count: The Art of Combinatorial Proof , and the exercises in that section come from that book, and influenced every choice of Fibonacci sequence problem in the remainder of the text.  The comic in the preface is copyright Zach Weinersmith, smbc-comics.com  I'm also grateful for you, reader, as we go on this journey of mathematics together. This is going to be fun.  "
},
{
  "id": "preface-1",
  "level": "1",
  "url": "preface-1.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " The WSU Catalog says of this course:   MATH 321. Discrete Structures I  Cross-listed as CS 321. Provides a mathematical foundation essential to the entire computer science curriculum. Includes propositional and predicate logic, induction, recursion and counting techniques. Prerequisite: MATH 242 or equivalent with a grade point of 2.000 or better.   We'll be exploring these areas, along with enough number theory to do an interesting application to encryption.  This course is very different that your past math courses. Keep an open mind, and please ask questions! This might be the hardest math class you take, but it can also be one of the most rewarding.   Comic by Zach Weinersmith of Saturday Morning Breakfast Cereal that tells us that yeah, math doesn't doesn't teach us humility. Copyright Zach Weinersmith, smbc-comics.com   "
},
{
  "id": "section-prop-logic",
  "level": "1",
  "url": "section-prop-logic.html",
  "type": "Section",
  "number": "1.1",
  "title": "Propositional Logic",
  "body": " Propositional Logic   The fundamental building block of mathematics that we will be exploring in this course is logical statements\/propositions . This section explores what they are and introduces operations that we do with them.    The Basics   Logical Propositions   A logical proposition or logical statement is a sentence which is either true or false, but not both.      Which of the following are logical propositions?  This is a course in discrete mathematics  Chocolate cupcakes are the best   Wichita is the capitol of Kansas  What are you doing?  1 + 2        This is a statement. It happens to be true.  This is not a statement. Although it is my opinion that chocolate cupcakes are the best, it is not something that is true or false -- it depends.  This is a mathematical statement. One minus three is four. is a false statement.  This is a statement. It’s false, since Topeka is the capitol.  This is a question; it's not a statement.  This isn't a statement either. The mathematical operation Add one to two does not have a truth value, it's just an instruction.         The last example raises an important distinction: not everything that looks like math is a logical statement. A question you might ask yourself is what is the result? If I wrote 1 + 2 , the result is a number. You'd say it's 3. If I wrote 1 - 3 = 4 , you'd say, No, that's false! The result is a truth value.   Logical Negation   Let be a logical proposition. The negation of , denoted by has the opposite truth value of .    We can negate a statement like 1- 3 = 4 . It's negation is . We can't negate something that isn't a statement -- Asking the opposite of 1+3 is meaningless.    What are the logical negations of each of the following?  This is a course in discrete mathematics     Wichita is the capitol of Kansas                 Logical Operations   Let and be propositions. The conjunction of and , denoted , is the proposition  and  .  The disjunction of and , denoted , is the proposition  or (or both) .  The logical disjunction is an inclusive or . On the other hand, we define the exclusive or of and to be the proposition or but not both . We won't be using it in Discrete 1, so we won't give it a special symbol.     Conditional Statements   Let and be propositions. The conditional statement is the compound proposition if then . The conditional is denoted by .  We call the hypothesis or antecedent or premise, and is the conclusion or consequence.      Write the following as a simple English expression, letting be the statement it rains and be the statement I complain about the weather .         What is the logical negation of in simple English?        There are many ways to phrase the conditional statement . Here are just a few common ones:  If , then .  implies .  only if .  if sufficient for .   is necessary for .   if .   whenever .   unless .      Converse\/Inverse\/Contrapositive   Let and be propositions. For the conditional , we define:  The converse is  The inverse is  The contrapositive is          Biconditional Statements   Let and be propositions. The biconditional of and , is the statement if and only if , denoted .  Other ways to phrase an if and only if statement:   iff .   is necessary and sufficient for .  If then and conversely.      Just as with arithmetic operations ( ) on numbers, we need to define an order of operations so that compound propositions can be understood without grouping symbols. Though for clarity, we will generally write grouping symbols.       Operator  Precedence       highest       next, from left to right      lowest, left to right     For example:      Truth Tables for Logical Connectives   Truth tables allow us to uniquely determine the truth value of a compound proposition, based on the truth values of the simple statements from which it is made. Below are the truth tables for conjunction , disjunction , conditional , biconditional , exclusive or , and negation .              T  T  T    T  F  F    F  T  F    F  F  F              T  T  T    T  F  T    F  T  T    F  F  F              T  T  T    T  F  F    F  T  T    F  F  T                T  T  T    T  F  F    F  T  F    F  F  T            T  F    F  T           Construct a truth table for each of the following statements:                       Imagine your teacher makes the following (unethical) statement, if you are a cat lover, then I'll give you an A in this class.   Do you not love cats? If so, it doesn't matter whether you get an A or not, what your teacher said was not a lie.  Are you a cat lover? Then the only way the teacher lied to you is if you didn't get an A.           Computer Corner  The objects that are logical propositions in mathematics are bool Boolean datatypes in computer science. For example, the clause 5 <= 3 will evaluate to False . This corresponds to the proposition 5 3 .   Think often about variable types. If you have a function that requires a bool but you ask it to accept 1+2 , you're going to get an error.   In C-like syntax:  Logical and, , is in code p && q   Logical or, , is in code p || q   Logical negation, , is the code !p  The conditional is an if...then statement    So a block of code such as: if (collision == 1 && object==sword && !blocking){ \/\/ hit by a sword, take damage health--; } corresponds to a logical statement of the form . Note that health--; isn't a statement. It's an operation to decrement the health; it isn't true or false.     Construct a truth table for the compound statement                    T  T  T    T  F  T    F  T  F    F  F  T       Consider the statement about a party, If it's your birthday or there will be cake, then there will be cake.    Translate the above statement into symbols. Clearly state which statement is and which is .    Make a truth table for the statement.    Assuming the statement is true, what (if anything) can you conclude if there will be cake?    Assuming the statement is true, what (if anything) can you conclude if there will not be cake?    Suppose you found out that the statement was a lie. What can you conclude?        : it's your birthday; : there will be cake.   Hint: you should get three T's and one F.    Only that there will be cake.    It's NOT your birthday!    It's your birthday, but the cake is a lie.        Make a truth table for the statement .             T  T  T    T  F  F    F  T  F    F  F  T       Make a truth table for the statement . What can you conclude about and if you know the statement is true?             T  T  F    T  F  F    F  T  F    F  F  T    If the statement is true, then both and are false.     Make a truth table for the statement .   Like above, only now you will need 8 rows instead of just 4.    State the converse, inverse, and contrapositive of each of the following conditional statements:  If it rains today, then I will bring an umbrella.  Whenever I drive my car, I do not use my phone.  When I stay up too late, it's necessary that I sleep until noon.       Converse: If I bring an umbrella then it rains today. . Inverse: If it doesn't rain today then I won't bring an umbrella. Contrapositive: If I won't bring an umbrella, then it isn't raining today .  The conditional Whenever I drive my car, I do not use my phone is If I drive my car, then I don't use my phone. Now find the other statements.  The conditional When I stay up too late, it's necessary that I sleep until noon is If I stay up too late, then it's necessary that I sleep until noon. Now find the other statements.      A classic example is that we're on the island of knights and knaves. Knights always tell the truth. Knaves always lie.  We encounter two people A and B.  A says: B is a knight.   B says: The two of us are opposite types.   What is the conclusion?   A and B are both lying knaves.    This time you encounter two people, A, and B, and A says I am a knave or B is a knight, and B says nothing. What can you conclude?   What happens if A is a knight and is telling the truth? What happens if A is lying? Which scenarios are impossible? What must the answer be?    This is a favorite of my daughter. You encounter a guard standing at a fork in the road. It is not known whether the guard is a knight or a knave, that is, that they will (always) tell the truth or (always) lie. One of the paths leads to great treasure, the other leads to a violent and scary death. You are allowed to ask one and only one question to the guard.  What can you ask the guard in order to ensure you go on the path towards the treasure?   The question is complicated, by not too complicated.    "
},
{
  "id": "p-12",
  "level": "2",
  "url": "section-prop-logic.html#p-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "logical statements\/propositions "
},
{
  "id": "definition-1",
  "level": "2",
  "url": "section-prop-logic.html#definition-1",
  "type": "Definition",
  "number": "1.1.1",
  "title": "Logical Propositions.",
  "body": " Logical Propositions   A logical proposition or logical statement is a sentence which is either true or false, but not both.   "
},
{
  "id": "example-1",
  "level": "2",
  "url": "section-prop-logic.html#example-1",
  "type": "Example",
  "number": "1.1.2",
  "title": "",
  "body": "  Which of the following are logical propositions?  This is a course in discrete mathematics  Chocolate cupcakes are the best   Wichita is the capitol of Kansas  What are you doing?  1 + 2        This is a statement. It happens to be true.  This is not a statement. Although it is my opinion that chocolate cupcakes are the best, it is not something that is true or false -- it depends.  This is a mathematical statement. One minus three is four. is a false statement.  This is a statement. It’s false, since Topeka is the capitol.  This is a question; it's not a statement.  This isn't a statement either. The mathematical operation Add one to two does not have a truth value, it's just an instruction.        "
},
{
  "id": "definition-2",
  "level": "2",
  "url": "section-prop-logic.html#definition-2",
  "type": "Definition",
  "number": "1.1.3",
  "title": "Logical Negation.",
  "body": " Logical Negation   Let be a logical proposition. The negation of , denoted by has the opposite truth value of .   "
},
{
  "id": "example-2",
  "level": "2",
  "url": "section-prop-logic.html#example-2",
  "type": "Example",
  "number": "1.1.4",
  "title": "",
  "body": "  What are the logical negations of each of the following?  This is a course in discrete mathematics     Wichita is the capitol of Kansas               "
},
{
  "id": "definition-3",
  "level": "2",
  "url": "section-prop-logic.html#definition-3",
  "type": "Definition",
  "number": "1.1.5",
  "title": "Logical Operations.",
  "body": " Logical Operations   Let and be propositions. The conjunction of and , denoted , is the proposition  and  .  The disjunction of and , denoted , is the proposition  or (or both) .  The logical disjunction is an inclusive or . On the other hand, we define the exclusive or of and to be the proposition or but not both . We won't be using it in Discrete 1, so we won't give it a special symbol.   "
},
{
  "id": "definition-4",
  "level": "2",
  "url": "section-prop-logic.html#definition-4",
  "type": "Definition",
  "number": "1.1.6",
  "title": "Conditional Statements.",
  "body": " Conditional Statements   Let and be propositions. The conditional statement is the compound proposition if then . The conditional is denoted by .  We call the hypothesis or antecedent or premise, and is the conclusion or consequence.   "
},
{
  "id": "example-3",
  "level": "2",
  "url": "section-prop-logic.html#example-3",
  "type": "Example",
  "number": "1.1.7",
  "title": "",
  "body": "  Write the following as a simple English expression, letting be the statement it rains and be the statement I complain about the weather .         What is the logical negation of in simple English?      "
},
{
  "id": "conditional-phrases",
  "level": "2",
  "url": "section-prop-logic.html#conditional-phrases",
  "type": "Note",
  "number": "1.1.8",
  "title": "",
  "body": " There are many ways to phrase the conditional statement . Here are just a few common ones:  If , then .  implies .  only if .  if sufficient for .   is necessary for .   if .   whenever .   unless .    "
},
{
  "id": "definition-5",
  "level": "2",
  "url": "section-prop-logic.html#definition-5",
  "type": "Definition",
  "number": "1.1.9",
  "title": "Converse\/Inverse\/Contrapositive.",
  "body": " Converse\/Inverse\/Contrapositive   Let and be propositions. For the conditional , we define:  The converse is  The inverse is  The contrapositive is        "
},
{
  "id": "definition-6",
  "level": "2",
  "url": "section-prop-logic.html#definition-6",
  "type": "Definition",
  "number": "1.1.10",
  "title": "Biconditional Statements.",
  "body": " Biconditional Statements   Let and be propositions. The biconditional of and , is the statement if and only if , denoted .  Other ways to phrase an if and only if statement:   iff .   is necessary and sufficient for .  If then and conversely.     "
},
{
  "id": "p-33",
  "level": "2",
  "url": "section-prop-logic.html#p-33",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Truth tables "
},
{
  "id": "example-4",
  "level": "2",
  "url": "section-prop-logic.html#example-4",
  "type": "Example",
  "number": "1.1.11",
  "title": "",
  "body": "  Construct a truth table for each of the following statements:                    "
},
{
  "id": "example-5",
  "level": "2",
  "url": "section-prop-logic.html#example-5",
  "type": "Example",
  "number": "1.1.12",
  "title": "",
  "body": "  Imagine your teacher makes the following (unethical) statement, if you are a cat lover, then I'll give you an A in this class.   Do you not love cats? If so, it doesn't matter whether you get an A or not, what your teacher said was not a lie.  Are you a cat lover? Then the only way the teacher lied to you is if you didn't get an A.        "
},
{
  "id": "exercise-1",
  "level": "2",
  "url": "section-prop-logic.html#exercise-1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " Construct a truth table for the compound statement                    T  T  T    T  F  T    F  T  F    F  F  T    "
},
{
  "id": "exercise-2",
  "level": "2",
  "url": "section-prop-logic.html#exercise-2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " Consider the statement about a party, If it's your birthday or there will be cake, then there will be cake.    Translate the above statement into symbols. Clearly state which statement is and which is .    Make a truth table for the statement.    Assuming the statement is true, what (if anything) can you conclude if there will be cake?    Assuming the statement is true, what (if anything) can you conclude if there will not be cake?    Suppose you found out that the statement was a lie. What can you conclude?        : it's your birthday; : there will be cake.   Hint: you should get three T's and one F.    Only that there will be cake.    It's NOT your birthday!    It's your birthday, but the cake is a lie.     "
},
{
  "id": "exercise-3",
  "level": "2",
  "url": "section-prop-logic.html#exercise-3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": " Make a truth table for the statement .             T  T  T    T  F  F    F  T  F    F  F  T    "
},
{
  "id": "exercise-4",
  "level": "2",
  "url": "section-prop-logic.html#exercise-4",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": " Make a truth table for the statement . What can you conclude about and if you know the statement is true?             T  T  F    T  F  F    F  T  F    F  F  T    If the statement is true, then both and are false.  "
},
{
  "id": "exercise-5",
  "level": "2",
  "url": "section-prop-logic.html#exercise-5",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": " Make a truth table for the statement .   Like above, only now you will need 8 rows instead of just 4.  "
},
{
  "id": "exercise-6",
  "level": "2",
  "url": "section-prop-logic.html#exercise-6",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": " State the converse, inverse, and contrapositive of each of the following conditional statements:  If it rains today, then I will bring an umbrella.  Whenever I drive my car, I do not use my phone.  When I stay up too late, it's necessary that I sleep until noon.       Converse: If I bring an umbrella then it rains today. . Inverse: If it doesn't rain today then I won't bring an umbrella. Contrapositive: If I won't bring an umbrella, then it isn't raining today .  The conditional Whenever I drive my car, I do not use my phone is If I drive my car, then I don't use my phone. Now find the other statements.  The conditional When I stay up too late, it's necessary that I sleep until noon is If I stay up too late, then it's necessary that I sleep until noon. Now find the other statements.    "
},
{
  "id": "exercise-7",
  "level": "2",
  "url": "section-prop-logic.html#exercise-7",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": " A classic example is that we're on the island of knights and knaves. Knights always tell the truth. Knaves always lie.  We encounter two people A and B.  A says: B is a knight.   B says: The two of us are opposite types.   What is the conclusion?   A and B are both lying knaves.  "
},
{
  "id": "exercise-8",
  "level": "2",
  "url": "section-prop-logic.html#exercise-8",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": " This time you encounter two people, A, and B, and A says I am a knave or B is a knight, and B says nothing. What can you conclude?   What happens if A is a knight and is telling the truth? What happens if A is lying? Which scenarios are impossible? What must the answer be?  "
},
{
  "id": "exercise-9",
  "level": "2",
  "url": "section-prop-logic.html#exercise-9",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": " This is a favorite of my daughter. You encounter a guard standing at a fork in the road. It is not known whether the guard is a knight or a knave, that is, that they will (always) tell the truth or (always) lie. One of the paths leads to great treasure, the other leads to a violent and scary death. You are allowed to ask one and only one question to the guard.  What can you ask the guard in order to ensure you go on the path towards the treasure?   The question is complicated, by not too complicated.  "
},
{
  "id": "sec_objects_sets",
  "level": "1",
  "url": "sec_objects_sets.html",
  "type": "Section",
  "number": "1.2",
  "title": "Sets",
  "body": " Sets   Sets are the next building block of mathematics. Just as we did with propositions, this section defines basic terms and explores how we can combine these objects to build new ones.    Basic terminology   Sets   A set is an unordered collection of objects called elements or members of the set.  If is a set and is an element of , we write . If isn't an element of , we write .   What kind of object?  Note that is a set, while is a statement . a is an element of set A has a truth value!       Below are examples of ways of writing sets:   Roster   list, out, the, elements, in, a, comma, separated, list  For example:     Set-builder   variable condition for variable to be in the set  For example,         Special Sets of Numbers   Here are some special sets we will visit often throughout the course and the rest of your mathematical career:   Empty set   is the set consisting of no elements.    Natural Numbers  , the set of counting numbers and zero.    Integers   includes all negative, zero, and positive counting numbers    Positive Integers   contains only the positive counting numbers.    Rational Numbers   is the set of all fractions.    Real Numbers   is the set of all real numbers. In Calculus, we wrote the interval . This includes all fractions and those irrational numbers that can't be written as fractions.              When using set-builder notation, we can think about it this way:   Here are several examples showing a variety of ways of writing sets:   tells us our elements are going to be whatever satisfy the expression where our variables are integers. This will be exactly    means that the elements will be natural numbers (this is the first part, ), and the qualification to be in the set is that . Note that same letter !. A little algebra says is the requirement to be a member, and since the elements are those same numbers, our set is    means the elements will be rational numbers of the form (this is the first part, ). Since the qualification is just that the is a natural number, that tells us to feed all natural numbers into our set, so we have    We have also seen intervals of real numbers in our previous courses which are the sets:                   Set Relations   We say that two sets, and are equal , an write they have exactly the same elements.  We say that is a subset of , and write if every element of is an element of .   If there is an element of which is not also in , we say that is a proper subset of and write .          Consider the set , then:   , since 3 is an element of   , because the set consisting of 3, , is a subset of .  We can also write, , because although the set is a subset of , they're unequal: , so it's a proper subset.  This is meaningless: since 3 a number, not a set, so it can't be a subset of  Order in sets doesn't matter, so .              The following theorem tells us that every set contains itself and also the empty set. That every set is a subset of itself maybe feels obvious, but the other half, that the empty set is a subset of every set, is a little less obvious. We will formally prove both statements are true in after we develop the tools of logical proof.    For every set ,   and   .       Since a set is always a subset of itself we can say that if two sets, and are equal, then is a subset of and vice versa.     Power Set   Given any set , the power set of is the set of all subsets of the set . We denote the power set of by       Find the power set of:                 Cardinality   Let be a set. If there are exactly distinct elements in where is a non-negative integer, then we say that is a finite set with cardinality of , and write .  A set is said to be infinite if it is not finite.      Find the cardinality:                  Operations on sets    We define an ordered tuple to be an ordered collection of the form .  We call the tuple an ordered pair , and the tuple an ordered triple .    Ordered pairs will be familiar from algebra and calculus when you plotted points on the Cartesian plane. meant that the came from one set (corresponding to the horizontal axis), and came from another set (corresponding to the vertical axis).   Cartesian Product   Let and be sets. The Cartesian Product of and , denoted by , is the set of all ordered pairs where and . That is,   We also denote the Cartesian product of a set with itself by the superscript .    Returning to our calculus experience, for the ordered pair , our and variables all came from the set of real numbers, so we'd formally say that the point is an element in the set or , that is, . If you've had calc 3, the points , live in three-dimensional space. Let's take a look at discrete examples.    Let and , find:    How many elements do you expect in ?             Set Operations   If and are two sets, we define the union of and , denoted , to be the set of all elements that are in or , or both.   As a Venn diagram:   Venn diagram for set union. Two circles labeled A and B. Both circles are completely shaded.    If and are two sets, we define the intersection of and , denoted , to be the set of only elements that are in both and .   As a Venn diagram:   Venn diagram for set intersection. Two circles labeled A and B. Only where the two circles overlap is shaded.    If and are two sets, we define the difference of and , denoted , to be the set of only elements that are only in and not in .    It's worth noting that some authors, Rosen included, use to denote the difference between two sets and . We'll be using the slightly more standard in this class.   As a Venn diagram:   Venn diagram for set difference . Two circles are labeled A and B. Only the part of A that doesn't overlap with B is shaded.    Let be the universal set , that is the set of all possible objects in consideration.   Venn diagram for the universal set. Everything is shaded, including A and B and everything outside of those circles.    If is a set, the complement of , denoted , is the set difference .   Venn diagram for the complement of . Here there is one circle labeled A and everything outside of it is shaded.        Let and , find                 What do you observe about some combination of the cardinalities above? Be on the lookout for patterns as you work through more cardinality questions. We'll find formulas in the future for things such as , , and     Verifying Set Identities  An identity is a statement which is true if we replace the variables with specific sets. One way that we can show that an identity is true by shading a Venn Diagram for each side of the equality.    Verify the following identities by using a Venn Diagram.            Fundamental set identities   Let and be three sets and let be the universal set.     Commutative Laws        Associative Laws        Distributive Laws        Identity Laws         Negation Laws        Idempotent Laws         Domination Laws        Absorption Laws        DeMorgan's Laws        Double Negation Law        It would be good practice to take a moment and confirm for yourself that these identities are true by shading a Venn diagram for each side of the equalities.     What kind of object is each of the following? Is it a set, a number, or a logical proposition? If it's a set, give its elements. If it's a number, give the number. If it's proposition, give its truth value.    If you want it to be possessive, it's just its. If you want a contraction it's i t apostrophe s.    Let , , and                          This is a set;   This is a statement. It is true.  This is also a statement. It is false, since but   This is a number. It's 4.  This is a set. It's .  This is statement. It's false.       Let , , and . Determine which of the following are true, false, or meaningless.  .  .  .  .  .  .  .  .  .        False. For example, but .    True. Every element in is an element in .    False. The elements in are 1, 2, and 3. The set  is not equal to 1, 2, or 3.    False. has exactly 6 elements, and none of them are the empty set.    True. Everything in the empty set (nothing) is also an element of . Notice that the empty set is a subset of every set.    Meaningless. A set cannot be less than another set.    True. is one of the elements of the set .    Meaningless. is not a set, so it cannot be a subset of another set.    True. is the only element of the set , and is an element of , so every element in is an element of .        Let , , and . If the universe is , find:  .  .  .  .  .  .  .  .  .       since everything in is already in .  since everything in is in .  as the only element of both and is 2.  since and have no common elements.  . First we find that , then we take everything not in that set.  since the elements 1, 3, and 5 are in but not in . This is the same as .  The set contains all elements that are either in but not in (i.e., ), or not in both and (i.e., ).  since nothing is added by the empty set.  since nothing can be both in a set and in the empty set.       Let , , and .   Find .    Find .    Find .    Find .    Find .    Is ? Explain.    Is ? Explain.        .  .  .  .     Yes. All three elements of are also elements of .  No. There is an element of , namely the element 2, which is not an element of .       Let , , and .   Find .    Find .    Find .    Find .                         Find an example of sets and such that and .   There are many possible examples. Here is a simple one. Let and      Find an example of sets and such that and .   For example, and      Draw a Venn diagram to represent each of the following:              :   Venn diagram of . Two circles are labeled A and B. Everything is shaded except for the small part of B that doesn't overlap A.      :   Venn diagram of . Two circles are labeled A and B. Everything outside the two circles are shaded.      :   Venn diagram of Three circles are labeled A, B, and C. Where A and B is shaded and where A and C is also shaded.      :   Venn diagram of . Three circles are labeled A, B, and C. Where A and B overlap is shaded. C is also shaded completely.      :   Venn diagram of . Three circles are labeled A, B, and C. Only the part of B that doesn't overlap A and doesn't overlap C is shaded.      :   Venn diagram of . Three circles are labeled A, B, and C. Only those parts of A and B that do not overlap C are shaded.          Describe a set in terms of and (using set notation) which has the following Venn diagram:   Venn diagram: A is mostly shaded, B is mostly shaded, but the area where A and B overlap is not.     One way to answer is      Find the following cardinalities:  when  when   when and ; note that 1 isn't prime.         34.    103.    8.        Let . Find .   We are looking for a set containing 16 sets.         Let . Find all sets which have the property .   There are eight possible sets. can be any of , , , , , , ,      Find an example of sets and such that , , and .   For example, and gives .     Let . How many subsets of contain exactly one element (i.e., how many singleton subsets are there)? How many doubleton subsets (containing exactly two elements) are there?   There are 10 subsets that consist of a single element. For subsets consisting of exactly two elements, there are 45     Find an example of sets and such that , , and .   There are many examples. Here's one possibility: . Then the union is .     Are there sets and such that , , and ? Explain.   Note that , (can you explain why this formula is correct? Make a Venn diagram)   The answer is no. Can you explain why?     In a regular deck of playing cards there are 26 red cards and 12 face cards. Explain, using sets and what you have learned about cardinalities, why there are only 32 cards which are either red or a face card.   The intersection of the set of red cards and the set of face cards is nonempty. It includes six cards: Jack of Hearts, Queen of Hearts, King of Hearts, Jack of Diamonds, Queen of Diamonds, and King of Diamonds.     Recall (the integers). Let be the positive integers. Let be the even integers, be the multiples of 3, and so on.   Is ? Explain.    Is ? Explain.    Find . Describe the set in words, and using set notation.         No, since the set on the right contains only multiples of , but the set on the left contains, for example, .    No. Because this time, we have , but   is the set of all integers which are multiples of both 2 and 3 (these are the multiples of 6). Therefore .      "
},
{
  "id": "definition-7",
  "level": "2",
  "url": "sec_objects_sets.html#definition-7",
  "type": "Definition",
  "number": "1.2.1",
  "title": "Sets.",
  "body": " Sets   A set is an unordered collection of objects called elements or members of the set.  If is a set and is an element of , we write . If isn't an element of , we write .   What kind of object?  Note that is a set, while is a statement . a is an element of set A has a truth value!    "
},
{
  "id": "example-6",
  "level": "2",
  "url": "sec_objects_sets.html#example-6",
  "type": "Example",
  "number": "1.2.2",
  "title": "",
  "body": "  Below are examples of ways of writing sets:   Roster   list, out, the, elements, in, a, comma, separated, list  For example:     Set-builder   variable condition for variable to be in the set  For example,       "
},
{
  "id": "definition-8",
  "level": "2",
  "url": "sec_objects_sets.html#definition-8",
  "type": "Definition",
  "number": "1.2.3",
  "title": "Special Sets of Numbers.",
  "body": " Special Sets of Numbers   Here are some special sets we will visit often throughout the course and the rest of your mathematical career:   Empty set   is the set consisting of no elements.    Natural Numbers  , the set of counting numbers and zero.    Integers   includes all negative, zero, and positive counting numbers    Positive Integers   contains only the positive counting numbers.    Rational Numbers   is the set of all fractions.    Real Numbers   is the set of all real numbers. In Calculus, we wrote the interval . This includes all fractions and those irrational numbers that can't be written as fractions.            "
},
{
  "id": "note-2",
  "level": "2",
  "url": "sec_objects_sets.html#note-2",
  "type": "Note",
  "number": "1.2.4",
  "title": "",
  "body": " When using set-builder notation, we can think about it this way:   Here are several examples showing a variety of ways of writing sets:   tells us our elements are going to be whatever satisfy the expression where our variables are integers. This will be exactly    means that the elements will be natural numbers (this is the first part, ), and the qualification to be in the set is that . Note that same letter !. A little algebra says is the requirement to be a member, and since the elements are those same numbers, our set is    means the elements will be rational numbers of the form (this is the first part, ). Since the qualification is just that the is a natural number, that tells us to feed all natural numbers into our set, so we have    We have also seen intervals of real numbers in our previous courses which are the sets:                 "
},
{
  "id": "definition-9",
  "level": "2",
  "url": "sec_objects_sets.html#definition-9",
  "type": "Definition",
  "number": "1.2.5",
  "title": "Set Relations.",
  "body": " Set Relations   We say that two sets, and are equal , an write they have exactly the same elements.  We say that is a subset of , and write if every element of is an element of .   If there is an element of which is not also in , we say that is a proper subset of and write .       "
},
{
  "id": "example-7",
  "level": "2",
  "url": "sec_objects_sets.html#example-7",
  "type": "Example",
  "number": "1.2.6",
  "title": "",
  "body": "  Consider the set , then:   , since 3 is an element of   , because the set consisting of 3, , is a subset of .  We can also write, , because although the set is a subset of , they're unequal: , so it's a proper subset.  This is meaningless: since 3 a number, not a set, so it can't be a subset of  Order in sets doesn't matter, so .     "
},
{
  "id": "theorem-subset-of-itself-and-empty-set",
  "level": "2",
  "url": "sec_objects_sets.html#theorem-subset-of-itself-and-empty-set",
  "type": "Theorem",
  "number": "1.2.7",
  "title": "",
  "body": "  For every set ,   and   .     "
},
{
  "id": "note-3",
  "level": "2",
  "url": "sec_objects_sets.html#note-3",
  "type": "Note",
  "number": "1.2.8",
  "title": "",
  "body": " Since a set is always a subset of itself we can say that if two sets, and are equal, then is a subset of and vice versa.   "
},
{
  "id": "definition-10",
  "level": "2",
  "url": "sec_objects_sets.html#definition-10",
  "type": "Definition",
  "number": "1.2.9",
  "title": "Power Set.",
  "body": " Power Set   Given any set , the power set of is the set of all subsets of the set . We denote the power set of by    "
},
{
  "id": "example-8",
  "level": "2",
  "url": "sec_objects_sets.html#example-8",
  "type": "Example",
  "number": "1.2.10",
  "title": "",
  "body": "  Find the power set of:               "
},
{
  "id": "definition-11",
  "level": "2",
  "url": "sec_objects_sets.html#definition-11",
  "type": "Definition",
  "number": "1.2.11",
  "title": "Cardinality.",
  "body": " Cardinality   Let be a set. If there are exactly distinct elements in where is a non-negative integer, then we say that is a finite set with cardinality of , and write .  A set is said to be infinite if it is not finite.   "
},
{
  "id": "example-9",
  "level": "2",
  "url": "sec_objects_sets.html#example-9",
  "type": "Example",
  "number": "1.2.12",
  "title": "",
  "body": "  Find the cardinality:               "
},
{
  "id": "definition-12",
  "level": "2",
  "url": "sec_objects_sets.html#definition-12",
  "type": "Definition",
  "number": "1.2.13",
  "title": "",
  "body": "  We define an ordered tuple to be an ordered collection of the form .  We call the tuple an ordered pair , and the tuple an ordered triple .   "
},
{
  "id": "definition-13",
  "level": "2",
  "url": "sec_objects_sets.html#definition-13",
  "type": "Definition",
  "number": "1.2.14",
  "title": "Cartesian Product.",
  "body": " Cartesian Product   Let and be sets. The Cartesian Product of and , denoted by , is the set of all ordered pairs where and . That is,   We also denote the Cartesian product of a set with itself by the superscript .   "
},
{
  "id": "example-10",
  "level": "2",
  "url": "sec_objects_sets.html#example-10",
  "type": "Example",
  "number": "1.2.15",
  "title": "",
  "body": "  Let and , find:    How many elements do you expect in ?           "
},
{
  "id": "definition-14",
  "level": "2",
  "url": "sec_objects_sets.html#definition-14",
  "type": "Definition",
  "number": "1.2.16",
  "title": "Set Operations.",
  "body": " Set Operations   If and are two sets, we define the union of and , denoted , to be the set of all elements that are in or , or both.   As a Venn diagram:   Venn diagram for set union. Two circles labeled A and B. Both circles are completely shaded.    If and are two sets, we define the intersection of and , denoted , to be the set of only elements that are in both and .   As a Venn diagram:   Venn diagram for set intersection. Two circles labeled A and B. Only where the two circles overlap is shaded.    If and are two sets, we define the difference of and , denoted , to be the set of only elements that are only in and not in .    It's worth noting that some authors, Rosen included, use to denote the difference between two sets and . We'll be using the slightly more standard in this class.   As a Venn diagram:   Venn diagram for set difference . Two circles are labeled A and B. Only the part of A that doesn't overlap with B is shaded.    Let be the universal set , that is the set of all possible objects in consideration.   Venn diagram for the universal set. Everything is shaded, including A and B and everything outside of those circles.    If is a set, the complement of , denoted , is the set difference .   Venn diagram for the complement of . Here there is one circle labeled A and everything outside of it is shaded.     "
},
{
  "id": "example-11",
  "level": "2",
  "url": "sec_objects_sets.html#example-11",
  "type": "Example",
  "number": "1.2.17",
  "title": "",
  "body": "  Let and , find                "
},
{
  "id": "p-116",
  "level": "2",
  "url": "sec_objects_sets.html#p-116",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "identity "
},
{
  "id": "example-12",
  "level": "2",
  "url": "sec_objects_sets.html#example-12",
  "type": "Example",
  "number": "1.2.18",
  "title": "",
  "body": "  Verify the following identities by using a Venn Diagram.          "
},
{
  "id": "list-set-identities",
  "level": "2",
  "url": "sec_objects_sets.html#list-set-identities",
  "type": "List",
  "number": "1.2.19",
  "title": "Fundamental set identities",
  "body": " Fundamental set identities   Let and be three sets and let be the universal set.     Commutative Laws        Associative Laws        Distributive Laws        Identity Laws         Negation Laws        Idempotent Laws         Domination Laws        Absorption Laws        DeMorgan's Laws        Double Negation Law       "
},
{
  "id": "exercise-10",
  "level": "2",
  "url": "sec_objects_sets.html#exercise-10",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " What kind of object is each of the following? Is it a set, a number, or a logical proposition? If it's a set, give its elements. If it's a number, give the number. If it's proposition, give its truth value.    If you want it to be possessive, it's just its. If you want a contraction it's i t apostrophe s.    Let , , and                          This is a set;   This is a statement. It is true.  This is also a statement. It is false, since but   This is a number. It's 4.  This is a set. It's .  This is statement. It's false.    "
},
{
  "id": "exercise-11",
  "level": "2",
  "url": "sec_objects_sets.html#exercise-11",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " Let , , and . Determine which of the following are true, false, or meaningless.  .  .  .  .  .  .  .  .  .        False. For example, but .    True. Every element in is an element in .    False. The elements in are 1, 2, and 3. The set  is not equal to 1, 2, or 3.    False. has exactly 6 elements, and none of them are the empty set.    True. Everything in the empty set (nothing) is also an element of . Notice that the empty set is a subset of every set.    Meaningless. A set cannot be less than another set.    True. is one of the elements of the set .    Meaningless. is not a set, so it cannot be a subset of another set.    True. is the only element of the set , and is an element of , so every element in is an element of .     "
},
{
  "id": "exercise-12",
  "level": "2",
  "url": "sec_objects_sets.html#exercise-12",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": " Let , , and . If the universe is , find:  .  .  .  .  .  .  .  .  .       since everything in is already in .  since everything in is in .  as the only element of both and is 2.  since and have no common elements.  . First we find that , then we take everything not in that set.  since the elements 1, 3, and 5 are in but not in . This is the same as .  The set contains all elements that are either in but not in (i.e., ), or not in both and (i.e., ).  since nothing is added by the empty set.  since nothing can be both in a set and in the empty set.    "
},
{
  "id": "exercise-13",
  "level": "2",
  "url": "sec_objects_sets.html#exercise-13",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": " Let , , and .   Find .    Find .    Find .    Find .    Find .    Is ? Explain.    Is ? Explain.        .  .  .  .     Yes. All three elements of are also elements of .  No. There is an element of , namely the element 2, which is not an element of .    "
},
{
  "id": "exercise-14",
  "level": "2",
  "url": "sec_objects_sets.html#exercise-14",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": " Let , , and .   Find .    Find .    Find .    Find .                      "
},
{
  "id": "exercise-15",
  "level": "2",
  "url": "sec_objects_sets.html#exercise-15",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": " Find an example of sets and such that and .   There are many possible examples. Here is a simple one. Let and   "
},
{
  "id": "exercise-16",
  "level": "2",
  "url": "sec_objects_sets.html#exercise-16",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": " Find an example of sets and such that and .   For example, and   "
},
{
  "id": "exercise-17",
  "level": "2",
  "url": "sec_objects_sets.html#exercise-17",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": " Draw a Venn diagram to represent each of the following:              :   Venn diagram of . Two circles are labeled A and B. Everything is shaded except for the small part of B that doesn't overlap A.      :   Venn diagram of . Two circles are labeled A and B. Everything outside the two circles are shaded.      :   Venn diagram of Three circles are labeled A, B, and C. Where A and B is shaded and where A and C is also shaded.      :   Venn diagram of . Three circles are labeled A, B, and C. Where A and B overlap is shaded. C is also shaded completely.      :   Venn diagram of . Three circles are labeled A, B, and C. Only the part of B that doesn't overlap A and doesn't overlap C is shaded.      :   Venn diagram of . Three circles are labeled A, B, and C. Only those parts of A and B that do not overlap C are shaded.       "
},
{
  "id": "exercise-18",
  "level": "2",
  "url": "sec_objects_sets.html#exercise-18",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": " Describe a set in terms of and (using set notation) which has the following Venn diagram:   Venn diagram: A is mostly shaded, B is mostly shaded, but the area where A and B overlap is not.     One way to answer is   "
},
{
  "id": "exercise-19",
  "level": "2",
  "url": "sec_objects_sets.html#exercise-19",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": " Find the following cardinalities:  when  when   when and ; note that 1 isn't prime.         34.    103.    8.     "
},
{
  "id": "exercise-20",
  "level": "2",
  "url": "sec_objects_sets.html#exercise-20",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": " Let . Find .   We are looking for a set containing 16 sets.      "
},
{
  "id": "exercise-21",
  "level": "2",
  "url": "sec_objects_sets.html#exercise-21",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": " Let . Find all sets which have the property .   There are eight possible sets. can be any of , , , , , , ,   "
},
{
  "id": "exercise-22",
  "level": "2",
  "url": "sec_objects_sets.html#exercise-22",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": " Find an example of sets and such that , , and .   For example, and gives .  "
},
{
  "id": "exercise-23",
  "level": "2",
  "url": "sec_objects_sets.html#exercise-23",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": " Let . How many subsets of contain exactly one element (i.e., how many singleton subsets are there)? How many doubleton subsets (containing exactly two elements) are there?   There are 10 subsets that consist of a single element. For subsets consisting of exactly two elements, there are 45  "
},
{
  "id": "exercise-24",
  "level": "2",
  "url": "sec_objects_sets.html#exercise-24",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": " Find an example of sets and such that , , and .   There are many examples. Here's one possibility: . Then the union is .  "
},
{
  "id": "exercise-25",
  "level": "2",
  "url": "sec_objects_sets.html#exercise-25",
  "type": "Exercise",
  "number": "16",
  "title": "",
  "body": " Are there sets and such that , , and ? Explain.   Note that , (can you explain why this formula is correct? Make a Venn diagram)   The answer is no. Can you explain why?  "
},
{
  "id": "exercise-26",
  "level": "2",
  "url": "sec_objects_sets.html#exercise-26",
  "type": "Exercise",
  "number": "17",
  "title": "",
  "body": " In a regular deck of playing cards there are 26 red cards and 12 face cards. Explain, using sets and what you have learned about cardinalities, why there are only 32 cards which are either red or a face card.   The intersection of the set of red cards and the set of face cards is nonempty. It includes six cards: Jack of Hearts, Queen of Hearts, King of Hearts, Jack of Diamonds, Queen of Diamonds, and King of Diamonds.  "
},
{
  "id": "exercise-27",
  "level": "2",
  "url": "sec_objects_sets.html#exercise-27",
  "type": "Exercise",
  "number": "18",
  "title": "",
  "body": " Recall (the integers). Let be the positive integers. Let be the even integers, be the multiples of 3, and so on.   Is ? Explain.    Is ? Explain.    Find . Describe the set in words, and using set notation.         No, since the set on the right contains only multiples of , but the set on the left contains, for example, .    No. Because this time, we have , but   is the set of all integers which are multiples of both 2 and 3 (these are the multiples of 6). Therefore .    "
},
{
  "id": "sec_relationsfunctions",
  "level": "1",
  "url": "sec_relationsfunctions.html",
  "type": "Section",
  "number": "1.3",
  "title": "Relations and Functions",
  "body": " Relations and Functions   Now that we have sets, we introduce a new object that connects one set to another. We call this object a relation. We'll also see that if a relation has some particularly nice properties, we'll call it a function.    Relations   Relations   A mathematical relation, , between two sets and is a collection of ordered pairs from the two sets. Expressed symbolically, . This is sometimes called a binary relation because it relates two sets.  We call set the domain and the set the codomain .  If is related to we will write or . If two elements and are not related, we write .   The statement is a logical statement whose truth value is true if the two elements are related and false if the two statements are not related.     Because a (binary) relation is a collection of ordered pairs from two sets, a relation is actually just a set itself, but that set carries particular meaning about its individual components.    If we consider and to both be the set of people in your family, and let be the relation is a sibling of . Here's an example of my family in two graphical representations. What are the ordered pairs that make up the relation?    Standard Cartesian graph showing my siblings. The horizontal and vertical axes are family members, labeled John, Eric, and Sarah. There is a dot on the graph when the two are related, so dots at (John, Eric), (John, Sarah), (Eric, John), (Eric, Sarah), (Sarah, John), and (Sarah, Eric).     Graph of two sets A and B. Elements on the left are John, Eric, and Sarah; elements on the right are John, Eric and Sarah. There is a line from John to Eric and John to Sarah; a line from Eric to John and Eric to Sarah; and a line from Sarah to John and Sarah to Eric.       Looking that the points on the graph, we see that the relation will be the set of ordered pairs: Notice that these ordered pairs correspond to the lines on the graph diagram with each of the first coordinates being connected to the second coordinate. E.g. an arrow goes from John to Eric.     The Divides Relation   Let and both be the set of integers from 1 to 10, and define the relation by means that evenly divides into with no remainder.  Here are some examples of the divides relation:   since 2 divides into 4 evenly. There is no remainder.  Similarly, since it divides into itself. No remainder.   since 3 doesn't divide into 4. The remainder is 1.   since 6 doesn't divide into 3. The remainder is 3.  Now, complete the following questions:      Complete the following graph of the relation below, where a point on means that divides evenly into .  'blank' Cartesian graph to complete. Horizontal axis is integers 1 through 10; vertical axis is integers 1 through 10.       Now list all ordered pairs in the relation.       The complete listing of the relation is:   and a video for the graph:       The domain and codomain don't have to be the same. For example, let be the relation from the set of people in discrete math class to the natural numbers which maps a person to their height in inches. In this example, (John, 76) . What ordered pair represents you?      Let be the relation from to where we say if .  List the first few ordered pairs of the relation for .   Plot points for the graph of for .  Blank Cartesian graph for plotting squares. Horizontal axis is labeled a and goes from -3 to 3. Vertical axis is labeled b and goes from 0 to 9              Inverse of Relations   Let be a relation between sets . The inverse relation of is the relation that assigns to each element an element . We denote the inverse by , so that for .      For the purposes of this exercise, all numbers come from and and are subsets of the set of people.  The relation has the inverse . Use this form to give inverses of the following relations:                           Functions   Functions   A function from the set to the set is a relation with the property that exactly one element from is mapped to each element of the set .  We denote this relation by  If is the unique element assigned to , we write    If , we call  is the image of under the mapping  is the preimage of under the mapping  and we define the range of the function to be the set of images of every element in the domain, , and often write the range by . Note that the range is a subset of the codomain, .        A function has two pieces of information:  Specification of two sets, the domain and codomain  A mapping between those two sets    In this class, we will be using a variety of ways of describing the domain and codomain of a function, from writing to describing them in words.     Find the domain, codomain, and range of the following functions:  Let be defined by  Let be defined by          Injective Functions   A function is said to be injective or one-to-one if and only if means that for all in the domain of .       To determine if a function is injective, we show that if for arbitrary values with , we conclude . (In a future section, we'll call this a direct proof ).  To determine if a function is not injective, we find particular elements such that but (we'll call this finding a counterexample .)    Draw a graph of a function which is not injective. Draw also the graph of one that is.    The following is a (silent) animation showing the graph of two functions, both have the algebraic expression . The first maps , which is not injective since, for example, , but , while the second maps , and it is injective.   This is my first thing I ever created with Manim, the math animation python package. I'm still learning...        Determine if the following functions are injective. If so, prove it. If not, provide a specific counterexample showing that it is not.  Let be defined by .  Let be the mapping from .          Surjective Functions   A function from to is said to be surjective or onto if and only if for every element , there is an element such that .          If a function is surjective the range is exactly the codomain, that is   To determine if a function is surjective, we show that given an arbitrary element we can find an element such that . (A direct proof).  To determine if a function is not surjective, we find a particular element such that for all (a counterexample!)    Draw a graph of a function which is not surjective. Draw also the graph of one that is.    The following is an animation showing the graph of two functions, both have the algebraic expression . The first maps , which is not surjective since, for example, is in the codomain, but has no solution in the domain.  The second maps , and it is surjective since each and every element of the codomain is mapped to.       Determine if the following functions are surjective. If so, prove it. If not, provide a specific counterexample showing that it is not.  Let be defined by .  Let be the mapping from .  Let be the mapping from .  Let be the mapping from .      Two videos in this section:       Bijective Functions   A function from to is said to be a one-to-one correspondence or bijective if it is both injective and surjective.      Determine if the following are bijections from :      Which of the functions we've considered so far have been bijections?          The Modulus Operation   Define the modulus operation , , on the set of integers to return the remainder when dividing by .   The modulus operation is a binary function that takes two numbers and returns a third number (the remainder after division).   For example,  since the remainder when dividing 25 by 4 is 1.  since 5 divides evenly into 25.   (remainders are always positive)      We'll use this operation to explore injective and surjective properties of functions! But first, so that we don't have to write or say all possible remainders when dividing by six, we introduce notation that says it for us.   Set of Integers Modulo n   We define the set , pronounced integers mod n to be the set of all possible remainders when dividing by :   For example:             Complete the following tables of values for each function:   Let be defined by      0  1  2  3  4            Is injective? surjective?    Let be defined by      0  1  2  3  4  5             Is injective? surjective?             0  1  2  3  4     2  3  4  0  1     is both injective and surjective - each output occurs only one time (injective) and each output occurs (surjective).  Note that the range of the function is which is equal to the whole co-domain (surjective).       0  1  2  3  4  5     2  3  0  5  0  3     is not injective since . The same output occurs twice - it fails the \"horizontal line test.\" is also not surjective since there is no solution to in the domain. The number 1 is in the codomain, but it's never output.  Note that the range of the function is which is not equal to the whole co-domain (not surjective).        Inverse Functions   Let be a bijection. The inverse function of is the unique function that assigns to each element a unique element such that . We denote the inverse by so that      Relations always have an inverse! We simply interchange the domain and codomain sets.   As we've seen, the inverse of a relation is always a relation, but not always a function. In order for a function, to have an inverse function , must be bijective.   If the function is not injective, then the inverse relation isn't a function. Failing the horizontal line test for injectivity means failing the vertical line test for being a function.  Here's an animation that illustrates this idea:     If the function is not surjective, then the inverse relation isn't well-defined. Any values that aren't mapped to in the original codomain can't be plugged into the inverse.  Here's an animation that illustrates this idea:        For the bijection(s) found in , find the inverse function.         Restrict the domain and\/or codomain (that is, make the domain\/codomain smaller sets) so that is invertible. Verify your answer is correct.    In order for to be injective, we can restrict the domain to just the non-negative real numbers: . In order for to be surjective, using the codomain to be the interval works for the chosen domain.  Alternatively, if we choose the domain to be , then the range is only square numbers, so the codomain would need to be .                                              Function Composition   Let and let . The composition of and , denoted by is defined, for all , by .   Composition of functions. Three circles are drawn separated by arrows. They are labeled A, B, and C. There is an arrow from A to B labeled S. There is an arrow from B to C labeled R, and there is a big arcing arrow from A to C labeled         Let and . Find and     This is basic algebra.       Suppose and are injective. Does it follow that is also injective?        Since given a function we define by for , , we have:   for , we have     and for , we have    That is, the inverse undoes a function.     Computer Corner  C++ defines functions by specifying both the input parameters ( domain ) and return type ( co-domain ). Here are some function examples:    int square(int num) { return num*num; }   Here the function is .   Here's another sample that changes the definition of the standard square root function:    #include <math.h> int mySqrt(int num) { return sqrt(num) } \/\/ this will return things like \/\/ mySqrt(4) = 2, which you'd expect. \/\/ but... \/\/ mySqrt(5) = 2, also. \/\/ This means mySqrt is not injective.   This function is . We can input negative numbers, but sqrt() throws an error in that case.   To get the correct fractional value of the square root of an integer, though, we'd need this:    #include <math.h> double mySqrt(int num) { return sqrt(num) } \/\/ Hooray! \/\/ mySqrt(5) = 2.23607 \/\/ and this time mySqrt is injective   This time the function is . The specification of the codomain is essential to make sure we can compute the correct value!     What kind of object? Binary operations vs.  I want to contrast the idea of a binary operation , such as with the mathematical statement .    A binary operation takes two numbers and returns a third number. Its result is a number.  As noted previously, is a statement when is a relation between two sets; it returns a truth value.      What kind of object are each of the following? What is the value, truth or numeric?             This is a number, the number is 14.  This is a statement, the value is false.  This is a number, it is 14  This is a statement, it is true, since 9 divides into 81 evenly  This is a statement, it is true. We're relating the operation 1+2 with the number 3      Just remember, you wouldn't say  is false , and you wouldn't say is 12 . Practice thinking about what type of object is expected, and it will become second nature.          The relation is the final of our mathematical building blocks. From here on we will be combining logical propositions, sets, and relations to build greater and greater complexity throughout the semester.     Consider the relation .  Is a function?  Find .  Is a function? Why or why not?       Yes   No        Is the sibling relation defined in a function? Why or why not?  Is the divides relation defined in on the set to itself a function? Why or why not?  Is the height relation between the set of people and the set of natural numbers a function? Why or why not?       No.  No. For example and are the the relation.  Yes, each person has a unique height (at any given time).      Let be the relation between the set and itself defined by whenever are exactly the same object.  What is the familiar way we normally write this relation?  Is this relation a function? If so, what is the algebraic definition?       We'd normally write if when and are the same object.  Yes! Given a set , we define the function by by .      Reformulate in order to define composition of two relations.   Very little needs changed - I'm simply relabling the variables. We'll explore relations (and their composition) in greater depth in Discrete 2.  Let and let . The composition of and , denoted by is defined, for all , by .   Composition of relations      Using the relations defined in , find the following compositions:                                          Consider the function given by the table below:     1  2  3  4  5     3  2  4  1  2       Is injective? Explain.    Is surjective? Explain.    Is a function? Explain.        No, the function is no injective. but clearly   Yes, the function is surjective. The codomain is and each element of the codomain is mapped (the range equals the codomain)       Consider the function given by the graph below.   Graph of the function f       Is injective? Explain.    Is surjective? Explain.        No! and   Also no, since there is no for which .       For each function given below, determine whether or not the function is injective and whether or not the function is surjective.  given by .  given by .  given by .  given by        is injective, but not surjective (since 0, for example, is never an output).  is injective and surjective. Unlike in the previous question, every integers is an output (of the integer 4 less than it).  is injective, but not surjective (10 is not 8 less than a multiple of 5, for example).  is not injective, but is surjective. Every integer is an output (of twice itself, for example) but some integers are outputs of more than one input: .      Determine whether is surjective if                   Yes, since given any integer we can find two other integers for which for example, .  No, since and there is no integers for which .  Yes, since every integer in the codomain is mappsed to via  Yes again, this will map to every possible integer. For example, for any integer in the codomain.  It's worth noting while these aren't injective, they can be surjective.     Consider the function given by    Is injective? Prove your answer.    Is surjective? Prove your answer.        is injective.    Let and be elements of the domain . Assume . If and are both even, then and . Since , we have which implies that . Similarly, if and are both odd, then so again . The only other possibility is that is even an is odd (or visa-versa). But then would be odd and would be even, so it cannot be that . Therefore if we then have , which proves that is injective.    is surjective.   Let be an element of the codomain . We will show there is an element of the domain ( ) such that . There are two cases: First, if is even, then let . Since is even, is odd, so as desired. Second, if is odd, then let . Since is odd, is even, so as needed. Therefore is surjective.        Give an explicit formula for a function from the set of integers to the set of positive integers that is   injective but not surjective  surjective but not injective  injective and surjective  neither injective nor surjective    Most likely, your solution will be piecewise-defined.                      Let . Consider the function given by . That is, takes a subset of as an input and outputs the cardinality of that set.   Is injective? Prove your answer.    Is surjective? Prove your answer.    Find .    Find .    Find .        is not injective. To prove this, we must simply find two different elements of the domain which map to the same element of the codomain. Since and , we see that is not injective.  is not surjective. The largest subset of is itself, and . So no natural number greater than 10 will ever be an output.  (the set of all the singleton subsets of ).  . Note, it would be wrong to write - that would claim that there is no input which has 0 as an output.  , since there are no subsets of with cardinality 12.       Let be the set of all numbers with three or fewer digits. Define the function by , where , , and are the digits of the number in . For example, .   Find .    Find .    Is injective. Explain.    Is surjective. Explain.         (since the largest sum of three digits is )   Part (a) proves that is not injective. The output 3 is assigned to 10 different inputs.    Part (b) proves that is not surjective. There is an element of the codomain (28) which is not assigned to any inputs.        What can you deduce about the sets and if you know    there is an injective function ? Explain.    there is a surjective function ? Explain.    there is a bijective function ? Explain.                 Suppose is a function. Which of the following are possible? Explain.  is injective but not surjective.  is surjective but not injective.  and is injective but not surjective.  and is surjective but not injective.  , and are finite, and is injective but not surjective.  , and are finite, and is surjective but not injective.       Yes  Yes  Yes  Yes  Finally a no!  Also a no       How does composition relate to function properties?  If and are both injective, must be injective? Explain.  If and are both surjective, must be surjective? Explain.  Suppose is surjective. What, if anything, can you say about and ? Explain.     Work with some examples.     Floor and Ceiling Functions   The floor function assigns to every real number the largest integer that is less than or equal to . We denote by this    The ceiling function assigns to every real number the smallest integer that is greater than or equal to . We denote by this       Find the floor and ceiling of each of the following real numbers:  8.675309           and    and    and          Let be defined by . Complete the table of values:     0  1  2  3  4            Is injective? surjective?      0  1  2  3  4     0  0  1  1  2     is not injective since , and it is not surjective since there is no solution to in the domain.    Are the floor or ceiling functions injective? Surjective? If so, prove it. If not, provide specific counterexamples to show why not.   I'm providing a solution for the floor function. The ceiling function solution can be done very similarly. The floor function is not injective. Consider the two real numbers 2.1 and 2.5: .  The floor function is surjective, however. Let be an integer in the codomain. Then consider , the domain.     Complete the following tables of values for each function:   Let be defined by        0  1  2  3  4              Is injective? surjective?    Let be defined by      0  1  2  3  4            Is injective? surjective?            0  1  2  3  4     3  4  0  1  2     is both injective and surjective.  Note that the range of the function is which is equal to the whole co-domain, which tells us it's surjective.       0  1  2  3  4     1  0  0  2  2     is not injective since for example. is also not surjective since there is no solution to in the domain.  Note that the range of the function is which is not equal co-domain, which tells us it's not surjective.                    "
},
{
  "id": "definition-15",
  "level": "2",
  "url": "sec_relationsfunctions.html#definition-15",
  "type": "Definition",
  "number": "1.3.1",
  "title": "Relations.",
  "body": " Relations   A mathematical relation, , between two sets and is a collection of ordered pairs from the two sets. Expressed symbolically, . This is sometimes called a binary relation because it relates two sets.  We call set the domain and the set the codomain .  If is related to we will write or . If two elements and are not related, we write .   The statement is a logical statement whose truth value is true if the two elements are related and false if the two statements are not related.    "
},
{
  "id": "ex_sib",
  "level": "2",
  "url": "sec_relationsfunctions.html#ex_sib",
  "type": "Example",
  "number": "1.3.2",
  "title": "",
  "body": "  If we consider and to both be the set of people in your family, and let be the relation is a sibling of . Here's an example of my family in two graphical representations. What are the ordered pairs that make up the relation?    Standard Cartesian graph showing my siblings. The horizontal and vertical axes are family members, labeled John, Eric, and Sarah. There is a dot on the graph when the two are related, so dots at (John, Eric), (John, Sarah), (Eric, John), (Eric, Sarah), (Sarah, John), and (Sarah, Eric).     Graph of two sets A and B. Elements on the left are John, Eric, and Sarah; elements on the right are John, Eric and Sarah. There is a line from John to Eric and John to Sarah; a line from Eric to John and Eric to Sarah; and a line from Sarah to John and Sarah to Eric.       Looking that the points on the graph, we see that the relation will be the set of ordered pairs: Notice that these ordered pairs correspond to the lines on the graph diagram with each of the first coordinates being connected to the second coordinate. E.g. an arrow goes from John to Eric.   "
},
{
  "id": "ex_divides_relation",
  "level": "2",
  "url": "sec_relationsfunctions.html#ex_divides_relation",
  "type": "Example",
  "number": "1.3.3",
  "title": "The Divides Relation.",
  "body": " The Divides Relation   Let and both be the set of integers from 1 to 10, and define the relation by means that evenly divides into with no remainder.  Here are some examples of the divides relation:   since 2 divides into 4 evenly. There is no remainder.  Similarly, since it divides into itself. No remainder.   since 3 doesn't divide into 4. The remainder is 1.   since 6 doesn't divide into 3. The remainder is 3.  Now, complete the following questions:      Complete the following graph of the relation below, where a point on means that divides evenly into .  'blank' Cartesian graph to complete. Horizontal axis is integers 1 through 10; vertical axis is integers 1 through 10.       Now list all ordered pairs in the relation.       The complete listing of the relation is:   and a video for the graph:    "
},
{
  "id": "example-15",
  "level": "2",
  "url": "sec_relationsfunctions.html#example-15",
  "type": "Example",
  "number": "1.3.4",
  "title": "",
  "body": "  The domain and codomain don't have to be the same. For example, let be the relation from the set of people in discrete math class to the natural numbers which maps a person to their height in inches. In this example, (John, 76) . What ordered pair represents you?   "
},
{
  "id": "example-16",
  "level": "2",
  "url": "sec_relationsfunctions.html#example-16",
  "type": "Example",
  "number": "1.3.5",
  "title": "",
  "body": "  Let be the relation from to where we say if .  List the first few ordered pairs of the relation for .   Plot points for the graph of for .  Blank Cartesian graph for plotting squares. Horizontal axis is labeled a and goes from -3 to 3. Vertical axis is labeled b and goes from 0 to 9            "
},
{
  "id": "definition-16",
  "level": "2",
  "url": "sec_relationsfunctions.html#definition-16",
  "type": "Definition",
  "number": "1.3.6",
  "title": "Inverse of Relations.",
  "body": " Inverse of Relations   Let be a relation between sets . The inverse relation of is the relation that assigns to each element an element . We denote the inverse by , so that for .   "
},
{
  "id": "example-relation-inverses",
  "level": "2",
  "url": "sec_relationsfunctions.html#example-relation-inverses",
  "type": "Example",
  "number": "1.3.7",
  "title": "",
  "body": "  For the purposes of this exercise, all numbers come from and and are subsets of the set of people.  The relation has the inverse . Use this form to give inverses of the following relations:                       "
},
{
  "id": "definition-17",
  "level": "2",
  "url": "sec_relationsfunctions.html#definition-17",
  "type": "Definition",
  "number": "1.3.8",
  "title": "Functions.",
  "body": " Functions   A function from the set to the set is a relation with the property that exactly one element from is mapped to each element of the set .  We denote this relation by  If is the unique element assigned to , we write    If , we call  is the image of under the mapping  is the preimage of under the mapping  and we define the range of the function to be the set of images of every element in the domain, , and often write the range by . Note that the range is a subset of the codomain, .      "
},
{
  "id": "note-4",
  "level": "2",
  "url": "sec_relationsfunctions.html#note-4",
  "type": "Note",
  "number": "1.3.9",
  "title": "",
  "body": " A function has two pieces of information:  Specification of two sets, the domain and codomain  A mapping between those two sets    In this class, we will be using a variety of ways of describing the domain and codomain of a function, from writing to describing them in words.  "
},
{
  "id": "example-18",
  "level": "2",
  "url": "sec_relationsfunctions.html#example-18",
  "type": "Example",
  "number": "1.3.10",
  "title": "",
  "body": "  Find the domain, codomain, and range of the following functions:  Let be defined by  Let be defined by        "
},
{
  "id": "definition-18",
  "level": "2",
  "url": "sec_relationsfunctions.html#definition-18",
  "type": "Definition",
  "number": "1.3.11",
  "title": "Injective Functions.",
  "body": " Injective Functions   A function is said to be injective or one-to-one if and only if means that for all in the domain of .      "
},
{
  "id": "example-19",
  "level": "2",
  "url": "sec_relationsfunctions.html#example-19",
  "type": "Example",
  "number": "1.3.12",
  "title": "",
  "body": "  Draw a graph of a function which is not injective. Draw also the graph of one that is.    The following is a (silent) animation showing the graph of two functions, both have the algebraic expression . The first maps , which is not injective since, for example, , but , while the second maps , and it is injective.   This is my first thing I ever created with Manim, the math animation python package. I'm still learning...     "
},
{
  "id": "example-20",
  "level": "2",
  "url": "sec_relationsfunctions.html#example-20",
  "type": "Example",
  "number": "1.3.13",
  "title": "",
  "body": "  Determine if the following functions are injective. If so, prove it. If not, provide a specific counterexample showing that it is not.  Let be defined by .  Let be the mapping from .        "
},
{
  "id": "definition-19",
  "level": "2",
  "url": "sec_relationsfunctions.html#definition-19",
  "type": "Definition",
  "number": "1.3.14",
  "title": "Surjective Functions.",
  "body": " Surjective Functions   A function from to is said to be surjective or onto if and only if for every element , there is an element such that .         "
},
{
  "id": "example-21",
  "level": "2",
  "url": "sec_relationsfunctions.html#example-21",
  "type": "Example",
  "number": "1.3.15",
  "title": "",
  "body": "  Draw a graph of a function which is not surjective. Draw also the graph of one that is.    The following is an animation showing the graph of two functions, both have the algebraic expression . The first maps , which is not surjective since, for example, is in the codomain, but has no solution in the domain.  The second maps , and it is surjective since each and every element of the codomain is mapped to.    "
},
{
  "id": "example-22",
  "level": "2",
  "url": "sec_relationsfunctions.html#example-22",
  "type": "Example",
  "number": "1.3.16",
  "title": "",
  "body": "  Determine if the following functions are surjective. If so, prove it. If not, provide a specific counterexample showing that it is not.  Let be defined by .  Let be the mapping from .  Let be the mapping from .  Let be the mapping from .      Two videos in this section:     "
},
{
  "id": "definition-20",
  "level": "2",
  "url": "sec_relationsfunctions.html#definition-20",
  "type": "Definition",
  "number": "1.3.17",
  "title": "Bijective Functions.",
  "body": " Bijective Functions   A function from to is said to be a one-to-one correspondence or bijective if it is both injective and surjective.   "
},
{
  "id": "example-bijections",
  "level": "2",
  "url": "sec_relationsfunctions.html#example-bijections",
  "type": "Example",
  "number": "1.3.18",
  "title": "",
  "body": "  Determine if the following are bijections from :      Which of the functions we've considered so far have been bijections?        "
},
{
  "id": "definition-modulus-operator",
  "level": "2",
  "url": "sec_relationsfunctions.html#definition-modulus-operator",
  "type": "Definition",
  "number": "1.3.19",
  "title": "The Modulus Operation.",
  "body": " The Modulus Operation   Define the modulus operation , , on the set of integers to return the remainder when dividing by .   The modulus operation is a binary function that takes two numbers and returns a third number (the remainder after division).   For example,  since the remainder when dividing 25 by 4 is 1.  since 5 divides evenly into 25.   (remainders are always positive)     "
},
{
  "id": "def-zmodn",
  "level": "2",
  "url": "sec_relationsfunctions.html#def-zmodn",
  "type": "Definition",
  "number": "1.3.20",
  "title": "Set of Integers Modulo n.",
  "body": " Set of Integers Modulo n   We define the set , pronounced integers mod n to be the set of all possible remainders when dividing by :   For example:          "
},
{
  "id": "example-modulus-injective-surjective",
  "level": "2",
  "url": "sec_relationsfunctions.html#example-modulus-injective-surjective",
  "type": "Example",
  "number": "1.3.21",
  "title": "",
  "body": "  Complete the following tables of values for each function:   Let be defined by      0  1  2  3  4            Is injective? surjective?    Let be defined by      0  1  2  3  4  5             Is injective? surjective?             0  1  2  3  4     2  3  4  0  1     is both injective and surjective - each output occurs only one time (injective) and each output occurs (surjective).  Note that the range of the function is which is equal to the whole co-domain (surjective).       0  1  2  3  4  5     2  3  0  5  0  3     is not injective since . The same output occurs twice - it fails the \"horizontal line test.\" is also not surjective since there is no solution to in the domain. The number 1 is in the codomain, but it's never output.  Note that the range of the function is which is not equal to the whole co-domain (not surjective).      "
},
{
  "id": "definition-23",
  "level": "2",
  "url": "sec_relationsfunctions.html#definition-23",
  "type": "Definition",
  "number": "1.3.22",
  "title": "Inverse Functions.",
  "body": " Inverse Functions   Let be a bijection. The inverse function of is the unique function that assigns to each element a unique element such that . We denote the inverse by so that    "
},
{
  "id": "note-5",
  "level": "2",
  "url": "sec_relationsfunctions.html#note-5",
  "type": "Note",
  "number": "1.3.23",
  "title": "",
  "body": " Relations always have an inverse! We simply interchange the domain and codomain sets.  "
},
{
  "id": "example-25",
  "level": "2",
  "url": "sec_relationsfunctions.html#example-25",
  "type": "Example",
  "number": "1.3.24",
  "title": "",
  "body": "  For the bijection(s) found in , find the inverse function.      "
},
{
  "id": "example-26",
  "level": "2",
  "url": "sec_relationsfunctions.html#example-26",
  "type": "Example",
  "number": "1.3.25",
  "title": "",
  "body": "  Restrict the domain and\/or codomain (that is, make the domain\/codomain smaller sets) so that is invertible. Verify your answer is correct.    In order for to be injective, we can restrict the domain to just the non-negative real numbers: . In order for to be surjective, using the codomain to be the interval works for the chosen domain.  Alternatively, if we choose the domain to be , then the range is only square numbers, so the codomain would need to be .   "
},
{
  "id": "def-composition-of-functions",
  "level": "2",
  "url": "sec_relationsfunctions.html#def-composition-of-functions",
  "type": "Definition",
  "number": "1.3.26",
  "title": "Function Composition.",
  "body": " Function Composition   Let and let . The composition of and , denoted by is defined, for all , by .   Composition of functions. Three circles are drawn separated by arrows. They are labeled A, B, and C. There is an arrow from A to B labeled S. There is an arrow from B to C labeled R, and there is a big arcing arrow from A to C labeled     "
},
{
  "id": "example-27",
  "level": "2",
  "url": "sec_relationsfunctions.html#example-27",
  "type": "Example",
  "number": "1.3.27",
  "title": "",
  "body": "  Let and . Find and     This is basic algebra.    "
},
{
  "id": "example-28",
  "level": "2",
  "url": "sec_relationsfunctions.html#example-28",
  "type": "Example",
  "number": "1.3.28",
  "title": "",
  "body": "  Suppose and are injective. Does it follow that is also injective?      "
},
{
  "id": "note-6",
  "level": "2",
  "url": "sec_relationsfunctions.html#note-6",
  "type": "Note",
  "number": "1.3.29",
  "title": "",
  "body": " Since given a function we define by for , , we have:   for , we have     and for , we have    That is, the inverse undoes a function.  "
},
{
  "id": "example-29",
  "level": "2",
  "url": "sec_relationsfunctions.html#example-29",
  "type": "Example",
  "number": "1.3.30",
  "title": "",
  "body": "  What kind of object are each of the following? What is the value, truth or numeric?             This is a number, the number is 14.  This is a statement, the value is false.  This is a number, it is 14  This is a statement, it is true, since 9 divides into 81 evenly  This is a statement, it is true. We're relating the operation 1+2 with the number 3     "
},
{
  "id": "exercise-28",
  "level": "2",
  "url": "sec_relationsfunctions.html#exercise-28",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " Consider the relation .  Is a function?  Find .  Is a function? Why or why not?       Yes   No    "
},
{
  "id": "exercise-29",
  "level": "2",
  "url": "sec_relationsfunctions.html#exercise-29",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "   Is the sibling relation defined in a function? Why or why not?  Is the divides relation defined in on the set to itself a function? Why or why not?  Is the height relation between the set of people and the set of natural numbers a function? Why or why not?       No.  No. For example and are the the relation.  Yes, each person has a unique height (at any given time).    "
},
{
  "id": "exercise-30",
  "level": "2",
  "url": "sec_relationsfunctions.html#exercise-30",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": " Let be the relation between the set and itself defined by whenever are exactly the same object.  What is the familiar way we normally write this relation?  Is this relation a function? If so, what is the algebraic definition?       We'd normally write if when and are the same object.  Yes! Given a set , we define the function by by .    "
},
{
  "id": "exercise-31",
  "level": "2",
  "url": "sec_relationsfunctions.html#exercise-31",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": " Reformulate in order to define composition of two relations.   Very little needs changed - I'm simply relabling the variables. We'll explore relations (and their composition) in greater depth in Discrete 2.  Let and let . The composition of and , denoted by is defined, for all , by .   Composition of relations    "
},
{
  "id": "exercise-32",
  "level": "2",
  "url": "sec_relationsfunctions.html#exercise-32",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": " Using the relations defined in , find the following compositions:                                       "
},
{
  "id": "exercise-33",
  "level": "2",
  "url": "sec_relationsfunctions.html#exercise-33",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": " Consider the function given by the table below:     1  2  3  4  5     3  2  4  1  2       Is injective? Explain.    Is surjective? Explain.    Is a function? Explain.        No, the function is no injective. but clearly   Yes, the function is surjective. The codomain is and each element of the codomain is mapped (the range equals the codomain)    "
},
{
  "id": "exercise-34",
  "level": "2",
  "url": "sec_relationsfunctions.html#exercise-34",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": " Consider the function given by the graph below.   Graph of the function f       Is injective? Explain.    Is surjective? Explain.        No! and   Also no, since there is no for which .    "
},
{
  "id": "exercise-35",
  "level": "2",
  "url": "sec_relationsfunctions.html#exercise-35",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": " For each function given below, determine whether or not the function is injective and whether or not the function is surjective.  given by .  given by .  given by .  given by        is injective, but not surjective (since 0, for example, is never an output).  is injective and surjective. Unlike in the previous question, every integers is an output (of the integer 4 less than it).  is injective, but not surjective (10 is not 8 less than a multiple of 5, for example).  is not injective, but is surjective. Every integer is an output (of twice itself, for example) but some integers are outputs of more than one input: .    "
},
{
  "id": "exercise-36",
  "level": "2",
  "url": "sec_relationsfunctions.html#exercise-36",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": " Determine whether is surjective if                   Yes, since given any integer we can find two other integers for which for example, .  No, since and there is no integers for which .  Yes, since every integer in the codomain is mappsed to via  Yes again, this will map to every possible integer. For example, for any integer in the codomain.  It's worth noting while these aren't injective, they can be surjective.  "
},
{
  "id": "exercise-37",
  "level": "2",
  "url": "sec_relationsfunctions.html#exercise-37",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": " Consider the function given by    Is injective? Prove your answer.    Is surjective? Prove your answer.        is injective.    Let and be elements of the domain . Assume . If and are both even, then and . Since , we have which implies that . Similarly, if and are both odd, then so again . The only other possibility is that is even an is odd (or visa-versa). But then would be odd and would be even, so it cannot be that . Therefore if we then have , which proves that is injective.    is surjective.   Let be an element of the codomain . We will show there is an element of the domain ( ) such that . There are two cases: First, if is even, then let . Since is even, is odd, so as desired. Second, if is odd, then let . Since is odd, is even, so as needed. Therefore is surjective.      "
},
{
  "id": "exercise-38",
  "level": "2",
  "url": "sec_relationsfunctions.html#exercise-38",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": " Give an explicit formula for a function from the set of integers to the set of positive integers that is   injective but not surjective  surjective but not injective  injective and surjective  neither injective nor surjective    Most likely, your solution will be piecewise-defined.                   "
},
{
  "id": "exercise-39",
  "level": "2",
  "url": "sec_relationsfunctions.html#exercise-39",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": " Let . Consider the function given by . That is, takes a subset of as an input and outputs the cardinality of that set.   Is injective? Prove your answer.    Is surjective? Prove your answer.    Find .    Find .    Find .        is not injective. To prove this, we must simply find two different elements of the domain which map to the same element of the codomain. Since and , we see that is not injective.  is not surjective. The largest subset of is itself, and . So no natural number greater than 10 will ever be an output.  (the set of all the singleton subsets of ).  . Note, it would be wrong to write - that would claim that there is no input which has 0 as an output.  , since there are no subsets of with cardinality 12.    "
},
{
  "id": "exercise-40",
  "level": "2",
  "url": "sec_relationsfunctions.html#exercise-40",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": " Let be the set of all numbers with three or fewer digits. Define the function by , where , , and are the digits of the number in . For example, .   Find .    Find .    Is injective. Explain.    Is surjective. Explain.         (since the largest sum of three digits is )   Part (a) proves that is not injective. The output 3 is assigned to 10 different inputs.    Part (b) proves that is not surjective. There is an element of the codomain (28) which is not assigned to any inputs.     "
},
{
  "id": "exercise-cardinality-of-domain-codomain",
  "level": "2",
  "url": "sec_relationsfunctions.html#exercise-cardinality-of-domain-codomain",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": " What can you deduce about the sets and if you know    there is an injective function ? Explain.    there is a surjective function ? Explain.    there is a bijective function ? Explain.              "
},
{
  "id": "exercise-42",
  "level": "2",
  "url": "sec_relationsfunctions.html#exercise-42",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": " Suppose is a function. Which of the following are possible? Explain.  is injective but not surjective.  is surjective but not injective.  and is injective but not surjective.  and is surjective but not injective.  , and are finite, and is injective but not surjective.  , and are finite, and is surjective but not injective.       Yes  Yes  Yes  Yes  Finally a no!  Also a no    "
},
{
  "id": "exercise-43",
  "level": "2",
  "url": "sec_relationsfunctions.html#exercise-43",
  "type": "Exercise",
  "number": "16",
  "title": "",
  "body": " How does composition relate to function properties?  If and are both injective, must be injective? Explain.  If and are both surjective, must be surjective? Explain.  Suppose is surjective. What, if anything, can you say about and ? Explain.     Work with some examples.  "
},
{
  "id": "definition-25",
  "level": "2",
  "url": "sec_relationsfunctions.html#definition-25",
  "type": "Definition",
  "number": "1.3.31",
  "title": "Floor and Ceiling Functions.",
  "body": " Floor and Ceiling Functions   The floor function assigns to every real number the largest integer that is less than or equal to . We denote by this    The ceiling function assigns to every real number the smallest integer that is greater than or equal to . We denote by this     "
},
{
  "id": "exercise-44",
  "level": "2",
  "url": "sec_relationsfunctions.html#exercise-44",
  "type": "Exercise",
  "number": "17",
  "title": "",
  "body": " Find the floor and ceiling of each of the following real numbers:  8.675309           and    and    and        "
},
{
  "id": "exercise-45",
  "level": "2",
  "url": "sec_relationsfunctions.html#exercise-45",
  "type": "Exercise",
  "number": "18",
  "title": "",
  "body": " Let be defined by . Complete the table of values:     0  1  2  3  4            Is injective? surjective?      0  1  2  3  4     0  0  1  1  2     is not injective since , and it is not surjective since there is no solution to in the domain.  "
},
{
  "id": "exercise-46",
  "level": "2",
  "url": "sec_relationsfunctions.html#exercise-46",
  "type": "Exercise",
  "number": "19",
  "title": "",
  "body": " Are the floor or ceiling functions injective? Surjective? If so, prove it. If not, provide specific counterexamples to show why not.   I'm providing a solution for the floor function. The ceiling function solution can be done very similarly. The floor function is not injective. Consider the two real numbers 2.1 and 2.5: .  The floor function is surjective, however. Let be an integer in the codomain. Then consider , the domain.   "
},
{
  "id": "exercise-47",
  "level": "2",
  "url": "sec_relationsfunctions.html#exercise-47",
  "type": "Exercise",
  "number": "20",
  "title": "",
  "body": " Complete the following tables of values for each function:   Let be defined by        0  1  2  3  4              Is injective? surjective?    Let be defined by      0  1  2  3  4            Is injective? surjective?            0  1  2  3  4     3  4  0  1  2     is both injective and surjective.  Note that the range of the function is which is equal to the whole co-domain, which tells us it's surjective.       0  1  2  3  4     1  0  0  2  2     is not injective since for example. is also not surjective since there is no solution to in the domain.  Note that the range of the function is which is not equal co-domain, which tells us it's not surjective.     "
},
{
  "id": "section-logic-equivalences",
  "level": "1",
  "url": "section-logic-equivalences.html",
  "type": "Section",
  "number": "2.1",
  "title": "Logical Equivalences",
  "body": " Logical Equivalences   What does it mean for two logical statements to be the same? In this section, we'll meet the idea of logical equivalence and visit two methods to show two statements are equivalent.        Tautologies and Contradictions   An expression involving logical variables that is true for all values is called a tautology .  An expression involving logical variables that is false for all values is called a contradiction .    Statements that are not tautologies or contradictions are called contingencies .   Most statements are contingencies. It is the tautologies and contradictions that are special that we will single out for the remainder of the semester.    Logical Equivalence   We say two propositions and are logically equivalent if is a tautology. We denote this by .    The first method to show that two statements are equivalent is to build a truth table to to find the truth values of .   Since is true if have the same truth values, in this course we will often build a truth table for the two statements and then remark on whether their columns are the same or different.     Prove the following are equivalent using a truth table.               We use often enough that this has a name. We'll call it implication        Here's the solution for :   Showing is a tautology            T  T  F  F  T  T    T  F  F  F  T  T    F  T  T  F  F  T    F  F  T  F  F  T       The following table is a set of core tautologies we will be using for the rest of the course. In the example that follows them, we will show how we can use these existing tautologies (which we'll call laws) to make conclusions about more complex statements.   Do you need to memorize them? Absolutely!    Fundamental logical equivalences   Let and be logical propositions.     Commutative Laws          Associative Laws          Distributive Laws          Identity Laws          Negation Laws         Idempotent Laws         Domination Laws         Absorption Laws         DeMorgan's Laws         Double Negation Law      Implication       You'll notice that for those laws which have two different forms they look very similar, just with different operations and truth and false swapped. Not only does this mean you actually have half as much to memorize, there's a neat reason for this that we'll get into when we discuss Boolean Algebras in Discrete 2!    Use the logical laws from to show the following are equivalent.                   This is your first experience with logical proof! It won't be your last. Much of this class is about learning to understand and argue rigorously.     Show that the following are true:  The conditional is logically equivalent to its contrapositive: .  The converse is logically equivalent to the inverse: .     Make a truth table for these statements.     Determine whether the following two statements are logically equivalent: and . Explain how you know you are correct.   Make a truth table for each and compare. The statements are logically equivalent.     Are the statements and logically equivalent?   Let's start with the left-hand side and work towards the right to find out. which was what we wanted to show.    Use a truth table to show that and are logically equivalent.   Here's an alternative solution using previous equivalences (not a truth table):      Simplify the following statements (so that negation only appears right before variables).  .  .  .        .  or, replacing the implication with a disjunction first: .   . This is necessarily false, so it is also equivalent to .         Use DeMorgan's Laws, and any other logical equivalence facts you know to simplify the following statements. Show all your steps. Your final statements should have negations only appear directly next to the sentence variables or predicates ( , , etc.), and no double negations. It would be a good idea to use only conjunctions, disjunctions, and negations.  .  (careful with the implications).                    ... it's a tautology!                  "
},
{
  "id": "definition-26",
  "level": "2",
  "url": "section-logic-equivalences.html#definition-26",
  "type": "Definition",
  "number": "2.1.1",
  "title": "Tautologies and Contradictions.",
  "body": " Tautologies and Contradictions   An expression involving logical variables that is true for all values is called a tautology .  An expression involving logical variables that is false for all values is called a contradiction .   "
},
{
  "id": "p-381",
  "level": "2",
  "url": "section-logic-equivalences.html#p-381",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "contingencies "
},
{
  "id": "definition-27",
  "level": "2",
  "url": "section-logic-equivalences.html#definition-27",
  "type": "Definition",
  "number": "2.1.2",
  "title": "Logical Equivalence.",
  "body": " Logical Equivalence   We say two propositions and are logically equivalent if is a tautology. We denote this by .   "
},
{
  "id": "example-30",
  "level": "2",
  "url": "section-logic-equivalences.html#example-30",
  "type": "Example",
  "number": "2.1.3",
  "title": "",
  "body": "  Prove the following are equivalent using a truth table.               We use often enough that this has a name. We'll call it implication        Here's the solution for :   Showing is a tautology            T  T  F  F  T  T    T  F  F  F  T  T    F  T  T  F  F  T    F  F  T  F  F  T      "
},
{
  "id": "list-logical-equivalences",
  "level": "2",
  "url": "section-logic-equivalences.html#list-logical-equivalences",
  "type": "List",
  "number": "2.1.5",
  "title": "Fundamental logical equivalences",
  "body": " Fundamental logical equivalences   Let and be logical propositions.     Commutative Laws          Associative Laws          Distributive Laws          Identity Laws          Negation Laws         Idempotent Laws         Domination Laws         Absorption Laws         DeMorgan's Laws         Double Negation Law      Implication      "
},
{
  "id": "example-contradiction-logic",
  "level": "2",
  "url": "section-logic-equivalences.html#example-contradiction-logic",
  "type": "Example",
  "number": "2.1.6",
  "title": "",
  "body": "  Use the logical laws from to show the following are equivalent.                  "
},
{
  "id": "exercise-48",
  "level": "2",
  "url": "section-logic-equivalences.html#exercise-48",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " Show that the following are true:  The conditional is logically equivalent to its contrapositive: .  The converse is logically equivalent to the inverse: .     Make a truth table for these statements.  "
},
{
  "id": "exercise-49",
  "level": "2",
  "url": "section-logic-equivalences.html#exercise-49",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " Determine whether the following two statements are logically equivalent: and . Explain how you know you are correct.   Make a truth table for each and compare. The statements are logically equivalent.  "
},
{
  "id": "exercise-50",
  "level": "2",
  "url": "section-logic-equivalences.html#exercise-50",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": " Are the statements and logically equivalent?   Let's start with the left-hand side and work towards the right to find out. which was what we wanted to show.  "
},
{
  "id": "exercise-51",
  "level": "2",
  "url": "section-logic-equivalences.html#exercise-51",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": " Use a truth table to show that and are logically equivalent.   Here's an alternative solution using previous equivalences (not a truth table):   "
},
{
  "id": "exercise-52",
  "level": "2",
  "url": "section-logic-equivalences.html#exercise-52",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": " Simplify the following statements (so that negation only appears right before variables).  .  .  .        .  or, replacing the implication with a disjunction first: .   . This is necessarily false, so it is also equivalent to .      "
},
{
  "id": "exercise-53",
  "level": "2",
  "url": "section-logic-equivalences.html#exercise-53",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": " Use DeMorgan's Laws, and any other logical equivalence facts you know to simplify the following statements. Show all your steps. Your final statements should have negations only appear directly next to the sentence variables or predicates ( , , etc.), and no double negations. It would be a good idea to use only conjunctions, disjunctions, and negations.  .  (careful with the implications).                    ... it's a tautology!     "
},
{
  "id": "sec_application_set_proofs",
  "level": "1",
  "url": "sec_application_set_proofs.html",
  "type": "Section",
  "number": "2.2",
  "title": "Application: Set Equivalences",
  "body": " Application: Set Equivalences   This section explores how we can apply the equivalences of logical statements to the set properties we explored in . It is no coincidence that those set properties look nearly identical to the logical equivalences! Instead of using Venn Diagrams, in this section we'll use equivalences to verify statements about sets.       Set operations defined via logic   Let be sets.  Subset:   Union:   Intersection:   Complement:   Complement: if and only if and .      Now that we have formally defined set properties in terms of our logical operations, we can now use our logical equivalences to formally prove statements about sets. We'll start with this basic statement we first introduced as     Prove that if is any set:               The logical statement we're trying to prove is   Assume that . This is false, since nothing is in the empty set. That means that the conditional statement is vacuously true, since the conditional is always true. Thus .    The logical statement we're trying to prove is   Assume that . Then is trivially true. Thus .       In the next example and the exercises, as you work through each proof, begin by picking one side of the equation, and writing out the logical statement according to . Then ask yourself what logical equivalence (De Morgan's Law? Associativity? Commutitivity? Distribution?), you could apply.  Take it one line at a time.    Prove the following identities:                     We'll prove the first via an if and only if argument: thus .    As noted above, take it one line at a time. As you review the example and check your solutions to exercises below, make sure that you understand each line. How did we get from the previous line to this one? Once you understand, move to the next. Don't be afraid to take it slow!     Let be sets. Prove the following identities:    Prove    Assume , then: and so .    Prove    Assume then we have and so .                       Prove     Here we convert the expression of sets into a logical statement and apply the distributive law for logical statements.   Assume that , then: and therefore .    Prove     Our strategy is to first convert the statement into a logical statement and then apply DeMorgan's law for logical statements.   Assume . Then: and so .    Prove if and only if     Here our trick is to use the fact the the contrapositive is equivalent to the conditional.   Assume . This means that . and thus .    "
},
{
  "id": "definition-of-set-props",
  "level": "2",
  "url": "sec_application_set_proofs.html#definition-of-set-props",
  "type": "Definition",
  "number": "2.2.1",
  "title": "Set operations defined via logic.",
  "body": " Set operations defined via logic   Let be sets.  Subset:   Union:   Intersection:   Complement:   Complement: if and only if and .     "
},
{
  "id": "example-subset-of-itself-and-empty-set",
  "level": "2",
  "url": "sec_application_set_proofs.html#example-subset-of-itself-and-empty-set",
  "type": "Example",
  "number": "2.2.2",
  "title": "",
  "body": "  Prove that if is any set:               The logical statement we're trying to prove is   Assume that . This is false, since nothing is in the empty set. That means that the conditional statement is vacuously true, since the conditional is always true. Thus .    The logical statement we're trying to prove is   Assume that . Then is trivially true. Thus .      "
},
{
  "id": "example-33",
  "level": "2",
  "url": "sec_application_set_proofs.html#example-33",
  "type": "Example",
  "number": "2.2.3",
  "title": "",
  "body": "  Prove the following identities:                     We'll prove the first via an if and only if argument: thus .   "
},
{
  "id": "exercise-54",
  "level": "2",
  "url": "sec_application_set_proofs.html#exercise-54",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " Prove    Assume , then: and so .  "
},
{
  "id": "exercise-55",
  "level": "2",
  "url": "sec_application_set_proofs.html#exercise-55",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " Prove    Assume then we have and so .  "
},
{
  "id": "exercise-56",
  "level": "2",
  "url": "sec_application_set_proofs.html#exercise-56",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": " Prove     Here we convert the expression of sets into a logical statement and apply the distributive law for logical statements.   Assume that , then: and therefore .  "
},
{
  "id": "exercise-57",
  "level": "2",
  "url": "sec_application_set_proofs.html#exercise-57",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": " Prove     Our strategy is to first convert the statement into a logical statement and then apply DeMorgan's law for logical statements.   Assume . Then: and so .  "
},
{
  "id": "exercise-58",
  "level": "2",
  "url": "sec_application_set_proofs.html#exercise-58",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": " Prove if and only if     Here our trick is to use the fact the the contrapositive is equivalent to the conditional.   Assume . This means that . and thus .  "
},
{
  "id": "section-logic-quantifiers",
  "level": "1",
  "url": "section-logic-quantifiers.html",
  "type": "Section",
  "number": "2.3",
  "title": "Propositional Functions and Quantifiers",
  "body": " Propositional Functions and Quantifiers   We often consider very similar propositions over and over: , , , etc... In this section, we take what is in common with these statements and build a generic function whose input is from some domain (in this example, numbers), and whose output is either true or false.    Predicates  Consider this mathematical sentence:  .  is a variable, the subject of the sentence.   is less than five is the predicate  A predicate is a property that a subject can have.   We can write  , where  the value of is the value of the propositional function  at .  Assigning a value to makes a proposition (it then has a truth value)        Domain of Discourse   The domain of discourse (or universe of discourse ) is the collection from which variables can take values.  For example, if my predicate function is is sharp , the function has a different meaning if my universe of discourse is all college students versus all tools.     The domain of discourse is the domain of the propositional function. Like all functions, it depends on the particular function we're considering. The codomain of a propositional function will always be the set .    Determine the truth values of the following:   If  The word contains the letter a .   (elephant)   (purple)   (true)   (false)      If  .                Logical Quantifiers  With the idea of generic propositional functions taken care of, we now want to make sweeping claims about the truth of a propositional function over some domain. Is the statement true for every value in the domain? Is the statement true for some specific value? These questions come up so frequently in mathematics that we give them each their own symbol.   Universal Quantifier   The universal quantification of is the statement that is true for all values of in the domain of discourse. We write   A counterexample is an value for which is false.        Existential Quantifier   The existential quantification of is the statement that there is some value in the universe of discourse for which is true. We write          Let be . What is the truth value of if the domain is:  All real numbers  All complex numbers                 Let the domain be all real numbers. Find a counterexample to the following statements:              We can combine quantifiers, where each variable might come from a different domain. Precedence of quantifiers is left to right.  What is the truth value of the following expressions where the domain is all real numbers:            Negating Quantifiers  The negation of quantifiers is found as follows:   It might help to think not all... is equivalent to some... do not . While there isn't one who... is the same as no one does... .       Counterexamples to universal statements work because if is true, then is also true, that is, is false!     For each negation below, write the statement using quantifiers to confirm each is correct.  The negation of There exists a green horse is No horse is green.   The negation of All people wear hats is the statement Some person doesn't wear hats .  The negation of Nobody loves math is Someone does love math .  Find the negation of some drivers don't obey the speed limit. .           If the universe of discourse is all people at the university, and is the statement loves to drink coffee, express each statement in plain English:                   Translate the statement into logical expressions using predicates, quantifiers, and logical connectives.  All of your friends are perfect.  Not everybody is your friend or someone is not perfect.            Determine the truth value of the each of these statements if the domain consists of all integers            True  True  True  False  False      Determine the truth value of each of the following statements if the domain consists of all real numbers.            True  False  True  False  False      Translate these statements into English where is is fast and is is an athlete , here the domain is the set of people.         Your answer shouldn't have in it anywhere! Regular people don't say For all x if x is fast, then... Here some some ideas (your answer may very)  All athletes are fast.  Everyone is a fast athlete.  Some fast person is an athlete.  There is a slow athlete.      Let denote the predicate is in the correct place , let denote is in excellent condition , and let denote is a tool where the domain of each predicate is the set of objects in a garage. Translate each into plain English:             Something in the garage is out of place.  Some tool is misplaced.  All tools are in excellent condition and in the correct place.       Simplify the statements below so that negations are only directly next to the predicates.  .  .   There is a number for which no other number is either less than or equal to .    It is false that for every number there are two other numbers which is between.              Applying DeMorgan's laws many, many times and noting that the opposite of is :     This statement can be written . It can be simplified as , and even further as     This statement can be written         Consider the statement, There is a building on the campus of some college in the United States in which every room is painted white.   Express the statement using quantifiers. Be sure to define your predicate function and specify the domain of each of the three variables.  Express the negation of the above logical quantified statement so that no negation is to the left of a quantifier.  Write the negation of the statement in plain English.     Let come from the universe of colleges in the US, be from the universe of buildings on a chosen campus and be the rooms in a chosen building.   We have to first select a college, then find the building on that campus:        Start with the negation on the left and apply DeMorgan's laws      On every campus in the US, every building has at least one room that isn't painted white.       "
},
{
  "id": "p-451",
  "level": "2",
  "url": "section-logic-quantifiers.html#p-451",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "predicate propositional function "
},
{
  "id": "definition-29",
  "level": "2",
  "url": "section-logic-quantifiers.html#definition-29",
  "type": "Definition",
  "number": "2.3.1",
  "title": "Domain of Discourse.",
  "body": " Domain of Discourse   The domain of discourse (or universe of discourse ) is the collection from which variables can take values.  For example, if my predicate function is is sharp , the function has a different meaning if my universe of discourse is all college students versus all tools.    "
},
{
  "id": "example-34",
  "level": "2",
  "url": "section-logic-quantifiers.html#example-34",
  "type": "Example",
  "number": "2.3.2",
  "title": "",
  "body": "  Determine the truth values of the following:   If  The word contains the letter a .   (elephant)   (purple)   (true)   (false)      If  .             "
},
{
  "id": "definition-30",
  "level": "2",
  "url": "section-logic-quantifiers.html#definition-30",
  "type": "Definition",
  "number": "2.3.3",
  "title": "Universal Quantifier.",
  "body": " Universal Quantifier   The universal quantification of is the statement that is true for all values of in the domain of discourse. We write   A counterexample is an value for which is false.      "
},
{
  "id": "definition-31",
  "level": "2",
  "url": "section-logic-quantifiers.html#definition-31",
  "type": "Definition",
  "number": "2.3.4",
  "title": "Existential Quantifier.",
  "body": " Existential Quantifier   The existential quantification of is the statement that there is some value in the universe of discourse for which is true. We write       "
},
{
  "id": "example-35",
  "level": "2",
  "url": "section-logic-quantifiers.html#example-35",
  "type": "Example",
  "number": "2.3.5",
  "title": "",
  "body": "  Let be . What is the truth value of if the domain is:  All real numbers  All complex numbers              "
},
{
  "id": "example-36",
  "level": "2",
  "url": "section-logic-quantifiers.html#example-36",
  "type": "Example",
  "number": "2.3.6",
  "title": "",
  "body": "  Let the domain be all real numbers. Find a counterexample to the following statements:           "
},
{
  "id": "example-37",
  "level": "2",
  "url": "section-logic-quantifiers.html#example-37",
  "type": "Example",
  "number": "2.3.7",
  "title": "",
  "body": "  We can combine quantifiers, where each variable might come from a different domain. Precedence of quantifiers is left to right.  What is the truth value of the following expressions where the domain is all real numbers:          "
},
{
  "id": "remark-1",
  "level": "2",
  "url": "section-logic-quantifiers.html#remark-1",
  "type": "Remark",
  "number": "2.3.8",
  "title": "Negating Quantifiers.",
  "body": " Negating Quantifiers  The negation of quantifiers is found as follows:   It might help to think not all... is equivalent to some... do not . While there isn't one who... is the same as no one does... .     "
},
{
  "id": "note-7",
  "level": "2",
  "url": "section-logic-quantifiers.html#note-7",
  "type": "Note",
  "number": "2.3.9",
  "title": "",
  "body": " Counterexamples to universal statements work because if is true, then is also true, that is, is false!  "
},
{
  "id": "example-38",
  "level": "2",
  "url": "section-logic-quantifiers.html#example-38",
  "type": "Example",
  "number": "2.3.10",
  "title": "",
  "body": "  For each negation below, write the statement using quantifiers to confirm each is correct.  The negation of There exists a green horse is No horse is green.   The negation of All people wear hats is the statement Some person doesn't wear hats .  The negation of Nobody loves math is Someone does love math .  Find the negation of some drivers don't obey the speed limit. .        "
},
{
  "id": "example-39",
  "level": "2",
  "url": "section-logic-quantifiers.html#example-39",
  "type": "Example",
  "number": "2.3.11",
  "title": "",
  "body": "  If the universe of discourse is all people at the university, and is the statement loves to drink coffee, express each statement in plain English:                "
},
{
  "id": "example-40",
  "level": "2",
  "url": "section-logic-quantifiers.html#example-40",
  "type": "Example",
  "number": "2.3.12",
  "title": "",
  "body": "  Translate the statement into logical expressions using predicates, quantifiers, and logical connectives.  All of your friends are perfect.  Not everybody is your friend or someone is not perfect.        "
},
{
  "id": "exercise-59",
  "level": "2",
  "url": "section-logic-quantifiers.html#exercise-59",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " Determine the truth value of the each of these statements if the domain consists of all integers            True  True  True  False  False    "
},
{
  "id": "exercise-60",
  "level": "2",
  "url": "section-logic-quantifiers.html#exercise-60",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " Determine the truth value of each of the following statements if the domain consists of all real numbers.            True  False  True  False  False    "
},
{
  "id": "exercise-61",
  "level": "2",
  "url": "section-logic-quantifiers.html#exercise-61",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": " Translate these statements into English where is is fast and is is an athlete , here the domain is the set of people.         Your answer shouldn't have in it anywhere! Regular people don't say For all x if x is fast, then... Here some some ideas (your answer may very)  All athletes are fast.  Everyone is a fast athlete.  Some fast person is an athlete.  There is a slow athlete.    "
},
{
  "id": "exercise-62",
  "level": "2",
  "url": "section-logic-quantifiers.html#exercise-62",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": " Let denote the predicate is in the correct place , let denote is in excellent condition , and let denote is a tool where the domain of each predicate is the set of objects in a garage. Translate each into plain English:             Something in the garage is out of place.  Some tool is misplaced.  All tools are in excellent condition and in the correct place.    "
},
{
  "id": "exercise-63",
  "level": "2",
  "url": "section-logic-quantifiers.html#exercise-63",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": " Simplify the statements below so that negations are only directly next to the predicates.  .  .   There is a number for which no other number is either less than or equal to .    It is false that for every number there are two other numbers which is between.              Applying DeMorgan's laws many, many times and noting that the opposite of is :     This statement can be written . It can be simplified as , and even further as     This statement can be written       "
},
{
  "id": "exercise-64",
  "level": "2",
  "url": "section-logic-quantifiers.html#exercise-64",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": " Consider the statement, There is a building on the campus of some college in the United States in which every room is painted white.   Express the statement using quantifiers. Be sure to define your predicate function and specify the domain of each of the three variables.  Express the negation of the above logical quantified statement so that no negation is to the left of a quantifier.  Write the negation of the statement in plain English.     Let come from the universe of colleges in the US, be from the universe of buildings on a chosen campus and be the rooms in a chosen building.   We have to first select a college, then find the building on that campus:        Start with the negation on the left and apply DeMorgan's laws      On every campus in the US, every building has at least one room that isn't painted white.     "
},
{
  "id": "section-logic-arguments",
  "level": "1",
  "url": "section-logic-arguments.html",
  "type": "Section",
  "number": "2.4",
  "title": "Logical Arguments",
  "body": " Logical Arguments     Vote for me, and your taxes will go down.  If is divisible by 4, then is even.  If you sneeze with your eyes open, your eye will burst. These statements are all logical arguments. In this section we'll discuss how to determine if such a statement is valid or invalid.   The sneezing myth was even in the April 30, 1882 issue of the New York Times ! [Her physician] says that probably the sneezing was so rapid that the eyelid remained open... of course the young woman lost the sight of the injured eye. .  This myth has been debunked, so don't be afraid to sneeze.        Logical Arguments   An argument is a sequence of statements ( premises ) that ends with a conclusion.  A valid argument is one where the conclusion follows from the truth of the premises.  For the sequence of premises and conclusion , an argument is valid if: is a tautology.  A fallacy is a form of incorrect reasoning that leads to an invalid argument.      Consider the following argument:  If you give a mouse a cookie, then he'll ask for a glass of milk.  You gave a mouse a cookie.  Therefore he asked for a glass of milk.    This argument is of the form:             and is valid since is a tautology.    Below is a table of common argument forms, also known as rules of inference. Observe that we're using to show if, then . This symbolic choice is to highlight the difference between the hypotheses and conclusion of the argument, and carries no additional meaning for the purposes of this course.   Basic argument forms - rule of inference   Let be logical propositions. The following are tautologies:     Modus Ponens\/Direct reasoning       Modus Tollens \/ Indirect Reasoning       Disjunctive Addition       Conjunctive Simplification          Disjunctive Simplification          Chain Argument \/ Syllogism       Conjunction       Resolution        It would be good practice to verify that each of the arguments in table is a tautology using either truth tables or logical equivalences.               What rules of inference are being used here?  Kangaroos live in Australia and are marsupials. Therefore, kangaroos are marsupials.  If I go swimming, then I will stay in the sun too long. If I stay in the sun too long, then I will sunburn. Therefore, if I go swimming, then I will sunburn.  I read a horror story. When I read horror stories, I have weird dreams. Therefore I had weird dreams.          Quantified Arguments       Existential instantiation describes the argument: for some in the domain.     Existential generalization describes the argument: .     Universal modus ponens describes the argument: where is a particular element in the domain.     Universal modus tollens describes the argument: where is a particular element in the domain.         Show that the premises, A student in this class has not read the book, and Everyone in this class passed the first exam imply the conclusion Someone who passed the first exam has not read the book. Let be is in this class,   x has read the book , and  passed the first exam.     Note that the number of the example is wrong, the video says 1.4.7, Sorry!     The statement, someone who passed the first exam has not read the book means there is someone in class did those things.   Argument step-by-step      Step  Reason    1.   Premise    2.   Existential instantiation    3.   Simplification of 2    4.   Premise    5.   Universal instantiation    6.   Modus ponens of 3 and 5    7.   simplification of 2 a different way    8.   Conjunction of 6 and 7    9 .   Existential generalization from 8.         For the following argument, explain the rules of inference for each step leading the the conclusion:   Linda, a student in this class owns a red convertible. Everyone who owns a red convertible has gotten at least one speeding ticket. Therefore, someone in this class has gotten at least one speeding ticket.         Here are some common fallacies. They're not typeset in a table because although you should be aware of what they are, they are not valid arguments!   Fallacy of affirming the conclusion:  If you get an A, you pass this class. You passed the class, therefore you got an A. (not valid!)  If an animal is a type of cat, it has hair. I have hair. Therefore, I must be some kind of cat. (not valid!)   is not a tautology!      Fallacy of denying the hypothesis  If you get an A, you pass this class. You didn't get an A. Oh no! You must not have passed this class! (still not valid!)  If an animal is a type of cat, it has hair. My dog Ruby isn't a cat. Therefore she must not have hair. (nope)   is not a tautology!           Determine if the following deduction rule is valid:              The deduction rule is valid. To see this, make a truth table which contains and (and and of course). Look at the truth value of in each of the rows that have and true.     Determine if the following is a valid deduction rule:              This is valid. Make a truth table.     Determine if the following is a valid deduction rule:              It isn't; make a truth table and see isn't a tautology.    Show that the following is a valid deduction rule by building a truth table.               Come up with all valid conclusions for this set of premises: If you get out the leash, the dog wants to go for a walk,  the dog wants to go for a walk if you put on shoes,  the dog wanting to go for a walk is sufficient for me to want a cat.  The dog doesn't want to go for a walk. Explain your answer noting each step of the argument.    Consider the statement Superman saves the day or Lois Lane dies. Superman saved the day, therefore Lois didn't die. Is the argument valid? Explain your answer.   This is an argument of the form:             This is a fallacy. In fact, it's the fallacy of denying the hypothesis in disguise. Rewrite the disjunction as an implication to see this:               Prove that the folowing is a valid argument, explaining each rule of inference used to arrive at the conclusion.    I take the bus or I walk. If I walk I get tired. I do not get tired. Therefore I take the bus.      All lions are fierce. Some lions do not drink coffee. Therefore, some fierce creatures do not drink coffee.         Write each in terms of logical symbols.  Let the universe of discourse be all creatures, be the statement is a lion,  be drinks coffee, and is is fierce.       Show that the following argument is invalid.  If wages increase, then there will be inflation. The cost of living will not increase if there is no inflation. Wages will increase. Therefore, the cost of living will increase.   Make a truth table.   The argument has three propositional variables and is of the form:                ... now make a truth table.    "
},
{
  "id": "definition-32",
  "level": "2",
  "url": "section-logic-arguments.html#definition-32",
  "type": "Definition",
  "number": "2.4.1",
  "title": "Logical Arguments.",
  "body": " Logical Arguments   An argument is a sequence of statements ( premises ) that ends with a conclusion.  A valid argument is one where the conclusion follows from the truth of the premises.  For the sequence of premises and conclusion , an argument is valid if: is a tautology.  A fallacy is a form of incorrect reasoning that leads to an invalid argument.   "
},
{
  "id": "example-41",
  "level": "2",
  "url": "section-logic-arguments.html#example-41",
  "type": "Example",
  "number": "2.4.2",
  "title": "",
  "body": "  Consider the following argument:  If you give a mouse a cookie, then he'll ask for a glass of milk.  You gave a mouse a cookie.  Therefore he asked for a glass of milk.    This argument is of the form:             and is valid since is a tautology.   "
},
{
  "id": "list-logical-arguments",
  "level": "2",
  "url": "section-logic-arguments.html#list-logical-arguments",
  "type": "List",
  "number": "2.4.3",
  "title": "Basic argument forms - rule of inference",
  "body": " Basic argument forms - rule of inference   Let be logical propositions. The following are tautologies:     Modus Ponens\/Direct reasoning       Modus Tollens \/ Indirect Reasoning       Disjunctive Addition       Conjunctive Simplification          Disjunctive Simplification          Chain Argument \/ Syllogism       Conjunction       Resolution       "
},
{
  "id": "example-42",
  "level": "2",
  "url": "section-logic-arguments.html#example-42",
  "type": "Example",
  "number": "2.4.4",
  "title": "",
  "body": "  What rules of inference are being used here?  Kangaroos live in Australia and are marsupials. Therefore, kangaroos are marsupials.  If I go swimming, then I will stay in the sun too long. If I stay in the sun too long, then I will sunburn. Therefore, if I go swimming, then I will sunburn.  I read a horror story. When I read horror stories, I have weird dreams. Therefore I had weird dreams.        "
},
{
  "id": "definition-33",
  "level": "2",
  "url": "section-logic-arguments.html#definition-33",
  "type": "Definition",
  "number": "2.4.5",
  "title": "Quantified Arguments.",
  "body": " Quantified Arguments       Existential instantiation describes the argument: for some in the domain.     Existential generalization describes the argument: .     Universal modus ponens describes the argument: where is a particular element in the domain.     Universal modus tollens describes the argument: where is a particular element in the domain.      "
},
{
  "id": "example-43",
  "level": "2",
  "url": "section-logic-arguments.html#example-43",
  "type": "Example",
  "number": "2.4.6",
  "title": "",
  "body": "  Show that the premises, A student in this class has not read the book, and Everyone in this class passed the first exam imply the conclusion Someone who passed the first exam has not read the book. Let be is in this class,   x has read the book , and  passed the first exam.     Note that the number of the example is wrong, the video says 1.4.7, Sorry!     The statement, someone who passed the first exam has not read the book means there is someone in class did those things.   Argument step-by-step      Step  Reason    1.   Premise    2.   Existential instantiation    3.   Simplification of 2    4.   Premise    5.   Universal instantiation    6.   Modus ponens of 3 and 5    7.   simplification of 2 a different way    8.   Conjunction of 6 and 7    9 .   Existential generalization from 8.      "
},
{
  "id": "example-44",
  "level": "2",
  "url": "section-logic-arguments.html#example-44",
  "type": "Example",
  "number": "2.4.8",
  "title": "",
  "body": "  For the following argument, explain the rules of inference for each step leading the the conclusion:   Linda, a student in this class owns a red convertible. Everyone who owns a red convertible has gotten at least one speeding ticket. Therefore, someone in this class has gotten at least one speeding ticket.        "
},
{
  "id": "exercise-65",
  "level": "2",
  "url": "section-logic-arguments.html#exercise-65",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " Determine if the following deduction rule is valid:              The deduction rule is valid. To see this, make a truth table which contains and (and and of course). Look at the truth value of in each of the rows that have and true.  "
},
{
  "id": "exercise-66",
  "level": "2",
  "url": "section-logic-arguments.html#exercise-66",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " Determine if the following is a valid deduction rule:              This is valid. Make a truth table.  "
},
{
  "id": "exercise-67",
  "level": "2",
  "url": "section-logic-arguments.html#exercise-67",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": " Determine if the following is a valid deduction rule:              It isn't; make a truth table and see isn't a tautology.  "
},
{
  "id": "exercise-68",
  "level": "2",
  "url": "section-logic-arguments.html#exercise-68",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": " Show that the following is a valid deduction rule by building a truth table.             "
},
{
  "id": "exercise-69",
  "level": "2",
  "url": "section-logic-arguments.html#exercise-69",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": " Come up with all valid conclusions for this set of premises: If you get out the leash, the dog wants to go for a walk,  the dog wants to go for a walk if you put on shoes,  the dog wanting to go for a walk is sufficient for me to want a cat.  The dog doesn't want to go for a walk. Explain your answer noting each step of the argument.  "
},
{
  "id": "exercise-70",
  "level": "2",
  "url": "section-logic-arguments.html#exercise-70",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": " Consider the statement Superman saves the day or Lois Lane dies. Superman saved the day, therefore Lois didn't die. Is the argument valid? Explain your answer.   This is an argument of the form:             This is a fallacy. In fact, it's the fallacy of denying the hypothesis in disguise. Rewrite the disjunction as an implication to see this:             "
},
{
  "id": "exercise-71",
  "level": "2",
  "url": "section-logic-arguments.html#exercise-71",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": " Prove that the folowing is a valid argument, explaining each rule of inference used to arrive at the conclusion.    I take the bus or I walk. If I walk I get tired. I do not get tired. Therefore I take the bus.      All lions are fierce. Some lions do not drink coffee. Therefore, some fierce creatures do not drink coffee.         Write each in terms of logical symbols.  Let the universe of discourse be all creatures, be the statement is a lion,  be drinks coffee, and is is fierce.    "
},
{
  "id": "exercise-72",
  "level": "2",
  "url": "section-logic-arguments.html#exercise-72",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": " Show that the following argument is invalid.  If wages increase, then there will be inflation. The cost of living will not increase if there is no inflation. Wages will increase. Therefore, the cost of living will increase.   Make a truth table.   The argument has three propositional variables and is of the form:                ... now make a truth table.  "
},
{
  "id": "section-logic-proofs",
  "level": "1",
  "url": "section-logic-proofs.html",
  "type": "Section",
  "number": "2.5",
  "title": "An introduction to proofs",
  "body": " An introduction to proofs   In this section we'll combine everything we've done so far in the book to introduce the idea of mathematical proof. We will take statements about numbers, functions, or sets, decompose them into quantified statements and reason using argumentation and rules of logic to draw conclusions. We will do this by writing complete English and mathematical sentences that take us from beginning to end, telling the story of the argument.      Before we start, we need to formally define some basic concepts of numbers.   Even Integer   A number is said to be even if it is a multiple of 2. That is, if there exists an integer such that , then is even.        6 is even since   0 is even, since  -8 is even, since  9 is not even, since there is no integer such that       Odd Integer   A number is said to be odd if it is not a multiple of 2. That is, if there exists an integer such that , then is odd.        7 is odd since   -1 is odd, since  8 is not odd, since there is no integer such that       Rational Number   A number is said to be rational if there exist integers with such that . If a number is not rational, we say that it is is irrational .        7 is rational since    is rational, since both 1 and 2 are integers      Note that every integer is a rational number, since if is an integer, then we can write which is a rational number. Not every rational number is an integer, for example, is not an integer.  There are also numbers which are not integers and also not rational. We'll give an example later in this section.    Basic concepts of proof   Statement Terminology     A theorem is a statement can be shown to be true. We generally reserve the word theorem for an important statement.  A proposition is a less important theorem.  The tools we use to prove a theorem are axioms (or postulates ) which are basic assumptions we make, as well as other theorems we've already proven.  A less important theorem that will be helpful in proving others is called a lemma .  A corollary is a theorem that follows directly from a theorem just proved.  A conjecture is a statement that we think may be true (our intuition suggests it)     In this book, I use proposition to mean everything that we'll prove together in the text and reserve theorem for things that will go unproven for now.       Here's a proposition: If is an odd integer, then is odd.   This statement means for the universe of discourse of all integers:     The universe of discourse was implied in the general statement above. Mathematical propositions will almost always omit the words for all.     Direct Proof  A direct proof is used when proving a proposition of the form . The goal is to show is true when we assume is true. Here's the model:   Assume is true.  ... use logical equivalences (and\/or mathematics) ...  Therefore is true.     Prove that the sum of two odd numbers is even.         Prove that if is even, then is even.         Prove that if and are even integers, then is even.         Indirect Proofs   We still want to show a statement is true, but perhaps that's difficult to approach directly. There are several different indirect proofs. The most frequent indirect approaches are proofs by contraposition and proofs by contradiction.    Proof by Contraposition  . A proof by contraposition is a direct proof of . Here's the model:   Assume is true.  ... use logical equivalences (and\/or mathematics) ...  Show is true. Therefore, is true by contraposition.   Remember that , so this is a valid argument.    Show that if is an integer and is odd, then is even.         Prove that if is even, then is even.         Proof by Contradiction  A proof by contradiction allows us to prove a statement which is not necessarily conditional. We accomplish this by assuming is true, and finding a contradiction. This works because as we showed in example . Here's the model:   Assume, to the contrary, that is false, that is is true.  ... use logical equivalences (and\/or mathematics) ...  Arrive at a logical contradiction. Some impossibility. Therefore, is true by contradiction.     Prove that is irrational                  Proofs of equivalence  For statements which are if an only if:  we need to prove both and its converse .    Prove that is even if and only if is even.    We actually did this in the two previous subsections. The forward direction and the converse .      Prove that is even if and only if is even.         Prove the following are equivalent:   The average of and is greater than   The average of and is less than            Proof by cases  Split an argument into completely separate pieces. In the example below we have two cases. Either or :    Show that if and are real numbers, then:   max( ) =   min( ) =          We need to prove each claim separately for each case!     Prove that is an odd integer when and are integers of opposite parity (not both even, not both odd).         Existence Proofs  The claim of an existence theorem is that there is some object that has a property. A constructive proof is one which, during the argumentation, tells the reader specifically how to come up with the object in question. A nonconstructive proof merely confirms the existence of an object, but doesn't give any detail as to how to find it.    Prove that either or is not a perfect square.    Let me get you started on it, and we can discuss below. Notice that the two numbers are one apart from eachother. They're massive, so we don't necessarily know whether they're square, but we need only show that not more than one of them is square.  Let's imagine that I have a square number, namely . Is it possible that or is also a square number? What condition on is required?      Show that between any two rational numbers is another rational number.    If we have two rational numbers and with and , then we can construct . Show that this is a rational number which is contained between the two original numbers.      Uniqueness proofs  The claim of a uniqueness theorem is that there exists an element that has a desired property, and that no other element has this property. The outline of our proof is often:  Prove the existence of , some element that has the property we want.  Assume that a second element, also has that property.  Conclude that       Show that if are real numbers with , then there is a unique solution to the algebraic equation .    You know how to solve an algebraic equation. Now assume there's a second solution. Show that the two solutions are equal.      Show that if is an odd integer, then there exists a unique integer such that     Similar to above, show that satisfies this equation, and then show that if you have another number, say that also does, it must be the case that .      Vacuous and Trivial Proofs   Vacuous Statements   A vacuous statement is one that is true because the hypothesis is false. You can prove a statement is true immediately.   If I play in the Super Bowl, I will throw the game winning touchdown.    Since I won't ever play in the Super Bowl, it doesn't matter what the truth value of the touchdown statement is. and just the same.        Trivial Statements   If we know that the conclusion of a statement is true, then the statement has a trivial proof.   Let be the statement If and , then .    Since we know that for any real number, . We didn't need the hypothesis . This is a trivial proof.         Counterexamples Revisited  Recall in math propositions, the universal quantifier is implied and is usually omitted. To show a statement is false, we need only find a single counterexample.    Each of the following statements is false. Find a specific counterexample and explain why the statement is false.   If is a real number, then .  Every integer is the sum of the squares of two integers.  where the domain of all variables is the set of all integers.  The product of two irrational numbers is irrational.  The sum of two irrational numbers is irrational.       For example, works, since .  The number 7 isn't the sum of two squares. The only squares smaller than 7 are 1 and 4. They don't add to 7.  Choosing we have but certainly .  We know (from above) that is irrational. Multiply it by itself. You get which is rational.  Consider and . Then their sum, , which is rational.          Consider the statement for all integers and , if is even, then and are even    Write the contrapositive of the statement.    Write the converse of the statement.    Write the negation of the statement.    Is the original statement true or false? Prove your answer.    Is the contrapositive of the original statement true or false? Prove your answer.    Is the converse of the original statement true or false? Prove your answer.    Is the negation of the original statement true or false? Prove your answer.         For all integers and , if or is not even, then is not even.    For all integers and , if and are even, then is even.    There are numbers and such that is even but and are not both even.    False. For example, and . , but neither nor are even.    False, since it is equivalent to the original statement.    True. Let and be integers. Assume both are even. Then and for some integers and . But then which is even.    True, since the statement is false.        Consider the statement: for all integers , if is even then is even.   Prove the statement. What sort of proof are you using?    Is the converse true? Prove or disprove.         Direct proof.  Let be an integer. Assume is even. Then for some integer . Thus . Therefore is even.      The converse is false. That is, there is an integer such that is even but is odd. For example, consider . Then which is even but is odd.        Your friend has shown you a proof he wrote to show that . Here is the proof:   I claim that . Of course we can do anything to one side of an equation as long as we also do it to the other side. So subtract 2 from both sides. This gives . Now square both sides, to get . And we all agree this is true.   What is going on here? Is your friend's argument valid? Is the argument a proof of the claim ? Carefully explain using what we know about logic.   Hint: What implication follows from the given proof?     Suppose that you would like to prove the following implication:   For all numbers , if is prime then is solitary.   Write out the beginning and end of the argument if you were to prove the statement,   Directly    By contrapositive    By contradiction     You do not need to provide details for the proofs (since you do not know what solitary means). However, make sure that you provide the first few and last few lines of the proofs so that we can see that logical structure you would follow.     Assume that is a prime number. Therefore is solitary.  Assume that is not solitary. Therefore is a prime number by contraposition.  Assume that is a prime number and is not solitary. This contradicts our assumption. Thus if is a prime number, is solitary.       For each of the statements below, say what method of proof you should use to prove them. Then say how the proof starts and how it ends. Pretend bonus points for filling in the middle.   There are no integers and such that is a prime greater than 5 and .    For all integers , if is a multiple of 3, then can be written as the sum of consecutive integers.    For all integers and , if is odd, then or is odd.         Proof by contradiction. Start of proof: Assume, for the sake of contradiction, that there are integers and such that is a prime greater than 5 and . End of proof: this is a contradiction, so there are no such integers.    Direct proof. Start of proof: Let be an integer. Assume is a multiple of 3. End of proof: Therefore can be written as the sum of consecutive integers.    Proof by contrapositive. Start of proof: Let and be integers. Assume that and are even. End of proof: Therefore is even.       Prove that if is multiple of three, then is a multiple of three where is an integer.   If a number isn't a multiple of three, then it's either 1 more than a multiple of three or 2 more than a multiple of three, that is, you'll have two cases, either or .      Proof by contraposition: Assume that is not a multiple of three. Then:  Case 1: There exists an integer such that . Consider: Hence is not a multiple of three.  Case 1: There exists an integer such that . Consider: Hence is not a multiple of three.  Thus, we have proven that if is a multiple of three, then is a multiple of three by contraposition.        Prove that is irrational.    Suppose were rational. Then for some integers and . Without loss of generality, assume is reduced. Now    So is a multiple of 3. This can only happen if is a multiple of 3, so for some integer . Then we have    So is a multiple of 3, making a multiple of 3 as well. But this contradicts our assumption that is in lowest terms.  Therefore, is irrational.      Consider the statement: for all integers and , if is even and is a multiple of 3, then is a multiple of 6.   Prove the statement. What sort of proof are you using?    State the converse. Is it true? Prove or disprove.           (this is a direct proof): Assume that is even is a multiple of three. Then there exist integers and such that and . Then . Thus is a multiple of six.      The converse is If is a multiple of six, then is even and is a multiple of three.   This is false. For example, where and .        Prove the statement: For all integers , if is odd, then is odd. Clearly state the style of proof you are using.   We will prove the contrapositive: if is even, then is even.   Let be an arbitrary integer, and suppose is even. Then for some integer . Thus . Since is an integer, we see that must be even. This completes the proof.      Prove: if and only if . Note, you will need to prove two directions here: the if and the only if part.       Assume that , and consider: This shows that if then .   Assume that Then: This shows that if , then .        Prove that is irrational.   We give a proof by contradiction.   Suppose, contrary to stipulation that is rational. Then with and integers. By properties of logarithms, this implies   Equivalently,   But this is impossible as any power of 7 will be odd while any power of 10 will be even. Therefore, is irrational.     Let's say you are presented with a conditional statement that you want to prove by contradiction. This exercise has you structure a model for contradiction of conditional statements like we saw in the model .  What is your assumption?  What is your conclusion?       Assume, to the contrary that is false, that is, we assume that or .  Therefore, is true by contradiction.       Prove that for all integers , , and , if , then or is even.   Try a proof by contradiction.   The negation of the statement is and both and are odd.    Assume that and are both odd and that . Then there exist integers and such that and .  First, we observe that so that and hence is even. Let where is some integer. Then: This is a contradiction as we have a multiple of four being equal to something which is not a multiple of four. Thus, our original assumption was incorrect and therefore if , we conclude that one of or is even.       Prove that there are no integer solutions to the equation .      Assume, to the contrary, that there is an integer solution, , to the equation We'll split this into four cases: Case 1: is odd and is even. Then there exist integers and such that and . Plugging this into the equation, we have: This is not possible, as 2 is not a multiple of 4.  Case 2: is even and is odd. Then there exist integers and such that and . Plugging this into the equation, we have: This is not possible, as 7 is not a multiple of 4.  Case 3: and are both even. Then there exist integers and such that and . Plugging this into the equation, we have: This is not possible, as 3 is not a multiple of 4.  Case 4: and are both odd. Then there exist integers and such that and . Plugging this into the equation, we have: This is also not possible, as 6 is not a multiple of 4. Since we've exhausted every possible combination of integer solutions, we conclude that there is no integer solution to the equation .       "
},
{
  "id": "definition-34",
  "level": "2",
  "url": "section-logic-proofs.html#definition-34",
  "type": "Definition",
  "number": "2.5.1",
  "title": "Even Integer.",
  "body": " Even Integer   A number is said to be even if it is a multiple of 2. That is, if there exists an integer such that , then is even.   "
},
{
  "id": "example-45",
  "level": "2",
  "url": "section-logic-proofs.html#example-45",
  "type": "Example",
  "number": "2.5.2",
  "title": "",
  "body": "    6 is even since   0 is even, since  -8 is even, since  9 is not even, since there is no integer such that     "
},
{
  "id": "definition-35",
  "level": "2",
  "url": "section-logic-proofs.html#definition-35",
  "type": "Definition",
  "number": "2.5.3",
  "title": "Odd Integer.",
  "body": " Odd Integer   A number is said to be odd if it is not a multiple of 2. That is, if there exists an integer such that , then is odd.   "
},
{
  "id": "example-46",
  "level": "2",
  "url": "section-logic-proofs.html#example-46",
  "type": "Example",
  "number": "2.5.4",
  "title": "",
  "body": "    7 is odd since   -1 is odd, since  8 is not odd, since there is no integer such that     "
},
{
  "id": "definition-36",
  "level": "2",
  "url": "section-logic-proofs.html#definition-36",
  "type": "Definition",
  "number": "2.5.5",
  "title": "Rational Number.",
  "body": " Rational Number   A number is said to be rational if there exist integers with such that . If a number is not rational, we say that it is is irrational .   "
},
{
  "id": "example-47",
  "level": "2",
  "url": "section-logic-proofs.html#example-47",
  "type": "Example",
  "number": "2.5.6",
  "title": "",
  "body": "    7 is rational since    is rational, since both 1 and 2 are integers     "
},
{
  "id": "definition-37",
  "level": "2",
  "url": "section-logic-proofs.html#definition-37",
  "type": "Definition",
  "number": "2.5.7",
  "title": "Statement Terminology.",
  "body": " Statement Terminology     A theorem is a statement can be shown to be true. We generally reserve the word theorem for an important statement.  A proposition is a less important theorem.  The tools we use to prove a theorem are axioms (or postulates ) which are basic assumptions we make, as well as other theorems we've already proven.  A less important theorem that will be helpful in proving others is called a lemma .  A corollary is a theorem that follows directly from a theorem just proved.  A conjecture is a statement that we think may be true (our intuition suggests it)     In this book, I use proposition to mean everything that we'll prove together in the text and reserve theorem for things that will go unproven for now.    "
},
{
  "id": "example-48",
  "level": "2",
  "url": "section-logic-proofs.html#example-48",
  "type": "Example",
  "number": "2.5.8",
  "title": "",
  "body": "  Here's a proposition: If is an odd integer, then is odd.   This statement means for the universe of discourse of all integers:    "
},
{
  "id": "proof-3",
  "level": "2",
  "url": "section-logic-proofs.html#proof-3",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " Assume is true.  ... use logical equivalences (and\/or mathematics) ...  Therefore is true.  "
},
{
  "id": "example-49",
  "level": "2",
  "url": "section-logic-proofs.html#example-49",
  "type": "Example",
  "number": "2.5.9",
  "title": "",
  "body": "  Prove that the sum of two odd numbers is even.      "
},
{
  "id": "example-neven",
  "level": "2",
  "url": "section-logic-proofs.html#example-neven",
  "type": "Example",
  "number": "2.5.10",
  "title": "",
  "body": "  Prove that if is even, then is even.      "
},
{
  "id": "example-51",
  "level": "2",
  "url": "section-logic-proofs.html#example-51",
  "type": "Example",
  "number": "2.5.11",
  "title": "",
  "body": "  Prove that if and are even integers, then is even.      "
},
{
  "id": "proof-4",
  "level": "2",
  "url": "section-logic-proofs.html#proof-4",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " Assume is true.  ... use logical equivalences (and\/or mathematics) ...  Show is true. Therefore, is true by contraposition.  "
},
{
  "id": "example-52",
  "level": "2",
  "url": "section-logic-proofs.html#example-52",
  "type": "Example",
  "number": "2.5.12",
  "title": "",
  "body": "  Show that if is an integer and is odd, then is even.      "
},
{
  "id": "example-n2even",
  "level": "2",
  "url": "section-logic-proofs.html#example-n2even",
  "type": "Example",
  "number": "2.5.13",
  "title": "",
  "body": "  Prove that if is even, then is even.      "
},
{
  "id": "contradiction-model",
  "level": "2",
  "url": "section-logic-proofs.html#contradiction-model",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " Assume, to the contrary, that is false, that is is true.  ... use logical equivalences (and\/or mathematics) ...  Arrive at a logical contradiction. Some impossibility. Therefore, is true by contradiction.  "
},
{
  "id": "ex-proof-sqrt2-irrational",
  "level": "2",
  "url": "section-logic-proofs.html#ex-proof-sqrt2-irrational",
  "type": "Example",
  "number": "2.5.14",
  "title": "",
  "body": "  Prove that is irrational      "
},
{
  "id": "example-55",
  "level": "2",
  "url": "section-logic-proofs.html#example-55",
  "type": "Example",
  "number": "2.5.15",
  "title": "",
  "body": "  Prove that is even if and only if is even.    We actually did this in the two previous subsections. The forward direction and the converse .   "
},
{
  "id": "example-56",
  "level": "2",
  "url": "section-logic-proofs.html#example-56",
  "type": "Example",
  "number": "2.5.16",
  "title": "",
  "body": "  Prove that is even if and only if is even.      "
},
{
  "id": "example-57",
  "level": "2",
  "url": "section-logic-proofs.html#example-57",
  "type": "Example",
  "number": "2.5.17",
  "title": "",
  "body": "  Prove the following are equivalent:   The average of and is greater than   The average of and is less than         "
},
{
  "id": "example-58",
  "level": "2",
  "url": "section-logic-proofs.html#example-58",
  "type": "Example",
  "number": "2.5.18",
  "title": "",
  "body": "  Show that if and are real numbers, then:   max( ) =   min( ) =        "
},
{
  "id": "note-8",
  "level": "2",
  "url": "section-logic-proofs.html#note-8",
  "type": "Note",
  "number": "2.5.19",
  "title": "",
  "body": " We need to prove each claim separately for each case!  "
},
{
  "id": "example-59",
  "level": "2",
  "url": "section-logic-proofs.html#example-59",
  "type": "Example",
  "number": "2.5.20",
  "title": "",
  "body": "  Prove that is an odd integer when and are integers of opposite parity (not both even, not both odd).      "
},
{
  "id": "p-594",
  "level": "2",
  "url": "section-logic-proofs.html#p-594",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "constructive proof nonconstructive proof "
},
{
  "id": "example-60",
  "level": "2",
  "url": "section-logic-proofs.html#example-60",
  "type": "Example",
  "number": "2.5.21",
  "title": "",
  "body": "  Prove that either or is not a perfect square.    Let me get you started on it, and we can discuss below. Notice that the two numbers are one apart from eachother. They're massive, so we don't necessarily know whether they're square, but we need only show that not more than one of them is square.  Let's imagine that I have a square number, namely . Is it possible that or is also a square number? What condition on is required?   "
},
{
  "id": "example-61",
  "level": "2",
  "url": "section-logic-proofs.html#example-61",
  "type": "Example",
  "number": "2.5.22",
  "title": "",
  "body": "  Show that between any two rational numbers is another rational number.    If we have two rational numbers and with and , then we can construct . Show that this is a rational number which is contained between the two original numbers.   "
},
{
  "id": "example-62",
  "level": "2",
  "url": "section-logic-proofs.html#example-62",
  "type": "Example",
  "number": "2.5.23",
  "title": "",
  "body": "  Show that if are real numbers with , then there is a unique solution to the algebraic equation .    You know how to solve an algebraic equation. Now assume there's a second solution. Show that the two solutions are equal.   "
},
{
  "id": "example-63",
  "level": "2",
  "url": "section-logic-proofs.html#example-63",
  "type": "Example",
  "number": "2.5.24",
  "title": "",
  "body": "  Show that if is an odd integer, then there exists a unique integer such that     Similar to above, show that satisfies this equation, and then show that if you have another number, say that also does, it must be the case that .   "
},
{
  "id": "definition-38",
  "level": "2",
  "url": "section-logic-proofs.html#definition-38",
  "type": "Definition",
  "number": "2.5.25",
  "title": "Vacuous Statements.",
  "body": " Vacuous Statements   A vacuous statement is one that is true because the hypothesis is false. You can prove a statement is true immediately.   If I play in the Super Bowl, I will throw the game winning touchdown.    Since I won't ever play in the Super Bowl, it doesn't matter what the truth value of the touchdown statement is. and just the same.      "
},
{
  "id": "definition-39",
  "level": "2",
  "url": "section-logic-proofs.html#definition-39",
  "type": "Definition",
  "number": "2.5.27",
  "title": "Trivial Statements.",
  "body": " Trivial Statements   If we know that the conclusion of a statement is true, then the statement has a trivial proof.   Let be the statement If and , then .    Since we know that for any real number, . We didn't need the hypothesis . This is a trivial proof.      "
},
{
  "id": "example-66",
  "level": "2",
  "url": "section-logic-proofs.html#example-66",
  "type": "Example",
  "number": "2.5.29",
  "title": "",
  "body": "  Each of the following statements is false. Find a specific counterexample and explain why the statement is false.   If is a real number, then .  Every integer is the sum of the squares of two integers.  where the domain of all variables is the set of all integers.  The product of two irrational numbers is irrational.  The sum of two irrational numbers is irrational.       For example, works, since .  The number 7 isn't the sum of two squares. The only squares smaller than 7 are 1 and 4. They don't add to 7.  Choosing we have but certainly .  We know (from above) that is irrational. Multiply it by itself. You get which is rational.  Consider and . Then their sum, , which is rational.     "
},
{
  "id": "exercise-73",
  "level": "2",
  "url": "section-logic-proofs.html#exercise-73",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " Consider the statement for all integers and , if is even, then and are even    Write the contrapositive of the statement.    Write the converse of the statement.    Write the negation of the statement.    Is the original statement true or false? Prove your answer.    Is the contrapositive of the original statement true or false? Prove your answer.    Is the converse of the original statement true or false? Prove your answer.    Is the negation of the original statement true or false? Prove your answer.         For all integers and , if or is not even, then is not even.    For all integers and , if and are even, then is even.    There are numbers and such that is even but and are not both even.    False. For example, and . , but neither nor are even.    False, since it is equivalent to the original statement.    True. Let and be integers. Assume both are even. Then and for some integers and . But then which is even.    True, since the statement is false.     "
},
{
  "id": "exercise-74",
  "level": "2",
  "url": "section-logic-proofs.html#exercise-74",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " Consider the statement: for all integers , if is even then is even.   Prove the statement. What sort of proof are you using?    Is the converse true? Prove or disprove.         Direct proof.  Let be an integer. Assume is even. Then for some integer . Thus . Therefore is even.      The converse is false. That is, there is an integer such that is even but is odd. For example, consider . Then which is even but is odd.     "
},
{
  "id": "exercise-75",
  "level": "2",
  "url": "section-logic-proofs.html#exercise-75",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": " Your friend has shown you a proof he wrote to show that . Here is the proof:   I claim that . Of course we can do anything to one side of an equation as long as we also do it to the other side. So subtract 2 from both sides. This gives . Now square both sides, to get . And we all agree this is true.   What is going on here? Is your friend's argument valid? Is the argument a proof of the claim ? Carefully explain using what we know about logic.   Hint: What implication follows from the given proof?  "
},
{
  "id": "exercise-76",
  "level": "2",
  "url": "section-logic-proofs.html#exercise-76",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": " Suppose that you would like to prove the following implication:   For all numbers , if is prime then is solitary.   Write out the beginning and end of the argument if you were to prove the statement,   Directly    By contrapositive    By contradiction     You do not need to provide details for the proofs (since you do not know what solitary means). However, make sure that you provide the first few and last few lines of the proofs so that we can see that logical structure you would follow.     Assume that is a prime number. Therefore is solitary.  Assume that is not solitary. Therefore is a prime number by contraposition.  Assume that is a prime number and is not solitary. This contradicts our assumption. Thus if is a prime number, is solitary.    "
},
{
  "id": "exercise-77",
  "level": "2",
  "url": "section-logic-proofs.html#exercise-77",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": " For each of the statements below, say what method of proof you should use to prove them. Then say how the proof starts and how it ends. Pretend bonus points for filling in the middle.   There are no integers and such that is a prime greater than 5 and .    For all integers , if is a multiple of 3, then can be written as the sum of consecutive integers.    For all integers and , if is odd, then or is odd.         Proof by contradiction. Start of proof: Assume, for the sake of contradiction, that there are integers and such that is a prime greater than 5 and . End of proof: this is a contradiction, so there are no such integers.    Direct proof. Start of proof: Let be an integer. Assume is a multiple of 3. End of proof: Therefore can be written as the sum of consecutive integers.    Proof by contrapositive. Start of proof: Let and be integers. Assume that and are even. End of proof: Therefore is even.     "
},
{
  "id": "exercise-78",
  "level": "2",
  "url": "section-logic-proofs.html#exercise-78",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": " Prove that if is multiple of three, then is a multiple of three where is an integer.   If a number isn't a multiple of three, then it's either 1 more than a multiple of three or 2 more than a multiple of three, that is, you'll have two cases, either or .      Proof by contraposition: Assume that is not a multiple of three. Then:  Case 1: There exists an integer such that . Consider: Hence is not a multiple of three.  Case 1: There exists an integer such that . Consider: Hence is not a multiple of three.  Thus, we have proven that if is a multiple of three, then is a multiple of three by contraposition.     "
},
{
  "id": "exercise-79",
  "level": "2",
  "url": "section-logic-proofs.html#exercise-79",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": " Prove that is irrational.    Suppose were rational. Then for some integers and . Without loss of generality, assume is reduced. Now    So is a multiple of 3. This can only happen if is a multiple of 3, so for some integer . Then we have    So is a multiple of 3, making a multiple of 3 as well. But this contradicts our assumption that is in lowest terms.  Therefore, is irrational.   "
},
{
  "id": "exercise-80",
  "level": "2",
  "url": "section-logic-proofs.html#exercise-80",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": " Consider the statement: for all integers and , if is even and is a multiple of 3, then is a multiple of 6.   Prove the statement. What sort of proof are you using?    State the converse. Is it true? Prove or disprove.           (this is a direct proof): Assume that is even is a multiple of three. Then there exist integers and such that and . Then . Thus is a multiple of six.      The converse is If is a multiple of six, then is even and is a multiple of three.   This is false. For example, where and .     "
},
{
  "id": "exercise-81",
  "level": "2",
  "url": "section-logic-proofs.html#exercise-81",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": " Prove the statement: For all integers , if is odd, then is odd. Clearly state the style of proof you are using.   We will prove the contrapositive: if is even, then is even.   Let be an arbitrary integer, and suppose is even. Then for some integer . Thus . Since is an integer, we see that must be even. This completes the proof.   "
},
{
  "id": "exercise-82",
  "level": "2",
  "url": "section-logic-proofs.html#exercise-82",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": " Prove: if and only if . Note, you will need to prove two directions here: the if and the only if part.       Assume that , and consider: This shows that if then .   Assume that Then: This shows that if , then .     "
},
{
  "id": "exercise-83",
  "level": "2",
  "url": "section-logic-proofs.html#exercise-83",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": " Prove that is irrational.   We give a proof by contradiction.   Suppose, contrary to stipulation that is rational. Then with and integers. By properties of logarithms, this implies   Equivalently,   But this is impossible as any power of 7 will be odd while any power of 10 will be even. Therefore, is irrational.   "
},
{
  "id": "exercise-84",
  "level": "2",
  "url": "section-logic-proofs.html#exercise-84",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": " Let's say you are presented with a conditional statement that you want to prove by contradiction. This exercise has you structure a model for contradiction of conditional statements like we saw in the model .  What is your assumption?  What is your conclusion?       Assume, to the contrary that is false, that is, we assume that or .  Therefore, is true by contradiction.    "
},
{
  "id": "exercise-85",
  "level": "2",
  "url": "section-logic-proofs.html#exercise-85",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": " Prove that for all integers , , and , if , then or is even.   Try a proof by contradiction.   The negation of the statement is and both and are odd.    Assume that and are both odd and that . Then there exist integers and such that and .  First, we observe that so that and hence is even. Let where is some integer. Then: This is a contradiction as we have a multiple of four being equal to something which is not a multiple of four. Thus, our original assumption was incorrect and therefore if , we conclude that one of or is even.    "
},
{
  "id": "exercise-86",
  "level": "2",
  "url": "section-logic-proofs.html#exercise-86",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": " Prove that there are no integer solutions to the equation .      Assume, to the contrary, that there is an integer solution, , to the equation We'll split this into four cases: Case 1: is odd and is even. Then there exist integers and such that and . Plugging this into the equation, we have: This is not possible, as 2 is not a multiple of 4.  Case 2: is even and is odd. Then there exist integers and such that and . Plugging this into the equation, we have: This is not possible, as 7 is not a multiple of 4.  Case 3: and are both even. Then there exist integers and such that and . Plugging this into the equation, we have: This is not possible, as 3 is not a multiple of 4.  Case 4: and are both odd. Then there exist integers and such that and . Plugging this into the equation, we have: This is also not possible, as 6 is not a multiple of 4. Since we've exhausted every possible combination of integer solutions, we conclude that there is no integer solution to the equation .     "
},
{
  "id": "section-prop-supplementatal",
  "level": "1",
  "url": "section-prop-supplementatal.html",
  "type": "Section",
  "number": "2.6",
  "title": "Chapter Review",
  "body": " Chapter Review   This section includes additional practice problems for the chapter on propositional logic.     Complete a truth table for the statement .            T  T  T  T    T  T  F  T    T  F  T  T    T  F  F  T    F  T  T  T    F  T  F  F    F  F  T  F    F  F  F  F      Suppose you know that the statement if Peter is not tall, then Quincy is fat and Robert is skinny is false . What, if anything, can you conclude about Peter and Robert if you know that Quincy is indeed fat? Explain (you may reference problem ).   Peter is not tall and Robert is not skinny. You must be in row 6 in the truth table above.    Are the statements and logically equivalent? Explain your answer.   Yes. To see this, make a truth table for each statement and compare.    Is the following a valid deduction rule? Explain.             .     Make a truth table that includes all three statements in the argument:             T  T  T  T  T  T    T  T  F  T  F  F    T  F  T  F  T  F    T  F  F  F  F  F    F  T  T  T  T  T    F  T  F  T  T  T    F  F  T  T  T  T    F  F  F  T  T  T    Notice that in every row for which both and is true, so is . Therefore, whenever the premises of the argument are true, so is the conclusion. In other words, the deduction rule is valid.    Write the negation, converse and contrapositive for each of the statements below.   If the power goes off, then the food will spoil.    If the door is closed, then the light is off.   .   For all natural numbers , if is prime, then is solitary.    For all functions , if is differentiable, then is continuous.    For all integers and , if is even, then and are even.    For every integer and every integer there is an integer such that if then .    For all real numbers and , if then or .    For every student in Math 321, if they do not understand implications, then they will fail the exam.         Negation: The power goes off and the food does not spoil.  Converse: If the food spoils, then the power went off.  Contrapositive: If the food does not spoil, then the power did not go off.    Negation: The door is closed and the light is on.  Converse: If the light is off then the door is closed.  Contrapositive: If the light is on then the door is open.    Negation:  Converse:  Contrapositive: .    Negation: There is a natural number which is prime but not solitary.  Converse: For all natural numbers , if is solitary, then is prime.  Contrapositive: For all natural numbers , if is not solitary then is not prime.    Negation: There is a function which is differentiable and not continuous.  Converse: For all functions , if is continuous then is differentiable.  Contrapositive: For all functions , if is not continuous then is not differentiable.    Negation: There are integers and for which is even but or is odd.  Converse: For all integers and , if and are even then is even.  Contrapositive: For all integers and , if or is odd, then is odd.    Negation: There are integers and such that for every integer , and .  Converse: For every integer and every integer there is an integer such that if then .  Contrapositive: For every integer and every integer there is an integer such that if then .    Negation: There are real numbers and such that but and .  Converse: For all real numbers and , if or then  Contrapositive: For all real numbers and , if and then .    Negation: There is at least one student in Math 321 who does not understand implications but will still pass the exam.  Converse: For every student in Math 321, if they fail the exam, then they did not understand implications.  Contrapositive: For every student in Math 321, if they pass the exam, then they understood implications.       Consider the statement: for all integers , if is even and then is negative or .   Is the statement true? Explain why.    Write the negation of the statement. Is it true? Explain.    State the contrapositive of the statement. Is it true? Explain.    State the converse of the statement. Is it true? Explain.         The statement is true. If is an even integer less than or equal to 7, then the only way it could not be negative is if was equal to 0, 2, 4, or 6.    There is an integer such that is even and but is not negative and . This is false, since the original statement is true.    For all integers , if is not negative and then is odd or . This is true, since the contrapositive is equivalent to the original statement (which is true).    For all integers , if is negative or then is even and . This is false. is a counterexample.       Consider the statement: .   Explain what the statement says in words. Is this statement true? Be sure to state what you are taking the universe of discourse to be.    Write the converse of the statement, both in words and in symbols. Is the converse true?    Write the contrapositive of the statement, both in words and in symbols. Is the contrapositive true?    Write the negation of the statement, both in words and in symbols. Is the negation true?         For any number , if it is the case that adding any number to gives that number back, then multiplying any number by will give 0. This is true (of the integers or the reals). The if part only holds if , and in that case, anything times will be 0.    The converse in words is this: for any number , if everything times is zero, then everything added to gives itself. Or in symbols: . The converse is true: the only number which when multiplied by any other number gives 0 is . And if , then .    The contrapositive in words is: for any number , if there is some number which when multiplied by does not give zero, then there is some number which when added to does not give that number. In symbols: . We know the contrapositive must be true because the original implication is true.    The negation: there is a number such that any number added to gives the number back again, but there is a number you can multiply by and not get 0. In symbols: . Of course since the original implication is true, the negation is false.       Write each of the following statements in the form, if , then . Careful, some of the statements might be false (which is alright for the purposes of this question).   To lose weight, you must exercise.    To lose weight, all you need to do is exercise.    Every American is patriotic.    You are patriotic only if you are American.    The set of rational numbers is a subset of the real numbers.    A number is prime if it is not even.    Either the Broncos will win the Super Bowl, or they won't play in the Super Bowl.         If you have lost weight, then you exercised.    If you exercise, then you will lose weight.    If you are American, then you are patriotic.    If you are patriotic, then you are American.    If a number is rational, then it is real.    If a number is not even, then it is prime. (Or the contrapositive: if a number is not prime, then it is even.)    If the Broncos don't win the Super Bowl, then they didn't play in the Super Bowl. Alternatively, if the Broncos play in the Super Bowl, then they will win the Super Bowl.       Simplify the following.  .  .       .  .      Consider the statement: for all integers , if is odd, then is odd.   Prove the statement. What sort of proof are you using?    Prove the converse. What sort of proof are you using?         Direct proof.  Let be an integer. Assume is odd. So for some integer . Then   Since is an integer, we see that is odd.      The converse is: for all integers , if is odd, then is odd. We will prove this by contrapositive.  Let be an integer. Assume is not odd. Then for some integer . So which is to say is even. Therefore is not odd.         You come across four trolls playing bridge. They declare:   Troll 1: All trolls here see at least one knave.  Troll 2: I see at least one troll that sees only knaves.  Troll 3: Some trolls are scared of goats.  Troll 4: All trolls are scared of goats.   Are there any trolls that are not scared of goats? Recall, of course, that all trolls are either knights (who always tell the truth) or knaves (who always lie).    "
},
{
  "id": "tt",
  "level": "2",
  "url": "section-prop-supplementatal.html#tt",
  "type": "Exercise",
  "number": "2.6.1",
  "title": "",
  "body": " Complete a truth table for the statement .            T  T  T  T    T  T  F  T    T  F  T  T    T  F  F  T    F  T  T  T    F  T  F  F    F  F  T  F    F  F  F  F    "
},
{
  "id": "exercise-88",
  "level": "2",
  "url": "section-prop-supplementatal.html#exercise-88",
  "type": "Exercise",
  "number": "2.6.2",
  "title": "",
  "body": " Suppose you know that the statement if Peter is not tall, then Quincy is fat and Robert is skinny is false . What, if anything, can you conclude about Peter and Robert if you know that Quincy is indeed fat? Explain (you may reference problem ).   Peter is not tall and Robert is not skinny. You must be in row 6 in the truth table above.  "
},
{
  "id": "exercise-89",
  "level": "2",
  "url": "section-prop-supplementatal.html#exercise-89",
  "type": "Exercise",
  "number": "2.6.3",
  "title": "",
  "body": " Are the statements and logically equivalent? Explain your answer.   Yes. To see this, make a truth table for each statement and compare.  "
},
{
  "id": "exercise-90",
  "level": "2",
  "url": "section-prop-supplementatal.html#exercise-90",
  "type": "Exercise",
  "number": "2.6.4",
  "title": "",
  "body": " Is the following a valid deduction rule? Explain.             .     Make a truth table that includes all three statements in the argument:             T  T  T  T  T  T    T  T  F  T  F  F    T  F  T  F  T  F    T  F  F  F  F  F    F  T  T  T  T  T    F  T  F  T  T  T    F  F  T  T  T  T    F  F  F  T  T  T    Notice that in every row for which both and is true, so is . Therefore, whenever the premises of the argument are true, so is the conclusion. In other words, the deduction rule is valid.  "
},
{
  "id": "exercise-91",
  "level": "2",
  "url": "section-prop-supplementatal.html#exercise-91",
  "type": "Exercise",
  "number": "2.6.5",
  "title": "",
  "body": " Write the negation, converse and contrapositive for each of the statements below.   If the power goes off, then the food will spoil.    If the door is closed, then the light is off.   .   For all natural numbers , if is prime, then is solitary.    For all functions , if is differentiable, then is continuous.    For all integers and , if is even, then and are even.    For every integer and every integer there is an integer such that if then .    For all real numbers and , if then or .    For every student in Math 321, if they do not understand implications, then they will fail the exam.         Negation: The power goes off and the food does not spoil.  Converse: If the food spoils, then the power went off.  Contrapositive: If the food does not spoil, then the power did not go off.    Negation: The door is closed and the light is on.  Converse: If the light is off then the door is closed.  Contrapositive: If the light is on then the door is open.    Negation:  Converse:  Contrapositive: .    Negation: There is a natural number which is prime but not solitary.  Converse: For all natural numbers , if is solitary, then is prime.  Contrapositive: For all natural numbers , if is not solitary then is not prime.    Negation: There is a function which is differentiable and not continuous.  Converse: For all functions , if is continuous then is differentiable.  Contrapositive: For all functions , if is not continuous then is not differentiable.    Negation: There are integers and for which is even but or is odd.  Converse: For all integers and , if and are even then is even.  Contrapositive: For all integers and , if or is odd, then is odd.    Negation: There are integers and such that for every integer , and .  Converse: For every integer and every integer there is an integer such that if then .  Contrapositive: For every integer and every integer there is an integer such that if then .    Negation: There are real numbers and such that but and .  Converse: For all real numbers and , if or then  Contrapositive: For all real numbers and , if and then .    Negation: There is at least one student in Math 321 who does not understand implications but will still pass the exam.  Converse: For every student in Math 321, if they fail the exam, then they did not understand implications.  Contrapositive: For every student in Math 321, if they pass the exam, then they understood implications.     "
},
{
  "id": "exercise-92",
  "level": "2",
  "url": "section-prop-supplementatal.html#exercise-92",
  "type": "Exercise",
  "number": "2.6.6",
  "title": "",
  "body": " Consider the statement: for all integers , if is even and then is negative or .   Is the statement true? Explain why.    Write the negation of the statement. Is it true? Explain.    State the contrapositive of the statement. Is it true? Explain.    State the converse of the statement. Is it true? Explain.         The statement is true. If is an even integer less than or equal to 7, then the only way it could not be negative is if was equal to 0, 2, 4, or 6.    There is an integer such that is even and but is not negative and . This is false, since the original statement is true.    For all integers , if is not negative and then is odd or . This is true, since the contrapositive is equivalent to the original statement (which is true).    For all integers , if is negative or then is even and . This is false. is a counterexample.     "
},
{
  "id": "exercise-93",
  "level": "2",
  "url": "section-prop-supplementatal.html#exercise-93",
  "type": "Exercise",
  "number": "2.6.7",
  "title": "",
  "body": " Consider the statement: .   Explain what the statement says in words. Is this statement true? Be sure to state what you are taking the universe of discourse to be.    Write the converse of the statement, both in words and in symbols. Is the converse true?    Write the contrapositive of the statement, both in words and in symbols. Is the contrapositive true?    Write the negation of the statement, both in words and in symbols. Is the negation true?         For any number , if it is the case that adding any number to gives that number back, then multiplying any number by will give 0. This is true (of the integers or the reals). The if part only holds if , and in that case, anything times will be 0.    The converse in words is this: for any number , if everything times is zero, then everything added to gives itself. Or in symbols: . The converse is true: the only number which when multiplied by any other number gives 0 is . And if , then .    The contrapositive in words is: for any number , if there is some number which when multiplied by does not give zero, then there is some number which when added to does not give that number. In symbols: . We know the contrapositive must be true because the original implication is true.    The negation: there is a number such that any number added to gives the number back again, but there is a number you can multiply by and not get 0. In symbols: . Of course since the original implication is true, the negation is false.     "
},
{
  "id": "exercise-94",
  "level": "2",
  "url": "section-prop-supplementatal.html#exercise-94",
  "type": "Exercise",
  "number": "2.6.8",
  "title": "",
  "body": " Write each of the following statements in the form, if , then . Careful, some of the statements might be false (which is alright for the purposes of this question).   To lose weight, you must exercise.    To lose weight, all you need to do is exercise.    Every American is patriotic.    You are patriotic only if you are American.    The set of rational numbers is a subset of the real numbers.    A number is prime if it is not even.    Either the Broncos will win the Super Bowl, or they won't play in the Super Bowl.         If you have lost weight, then you exercised.    If you exercise, then you will lose weight.    If you are American, then you are patriotic.    If you are patriotic, then you are American.    If a number is rational, then it is real.    If a number is not even, then it is prime. (Or the contrapositive: if a number is not prime, then it is even.)    If the Broncos don't win the Super Bowl, then they didn't play in the Super Bowl. Alternatively, if the Broncos play in the Super Bowl, then they will win the Super Bowl.     "
},
{
  "id": "exercise-95",
  "level": "2",
  "url": "section-prop-supplementatal.html#exercise-95",
  "type": "Exercise",
  "number": "2.6.9",
  "title": "",
  "body": " Simplify the following.  .  .       .  .    "
},
{
  "id": "exercise-96",
  "level": "2",
  "url": "section-prop-supplementatal.html#exercise-96",
  "type": "Exercise",
  "number": "2.6.10",
  "title": "",
  "body": " Consider the statement: for all integers , if is odd, then is odd.   Prove the statement. What sort of proof are you using?    Prove the converse. What sort of proof are you using?         Direct proof.  Let be an integer. Assume is odd. So for some integer . Then   Since is an integer, we see that is odd.      The converse is: for all integers , if is odd, then is odd. We will prove this by contrapositive.  Let be an integer. Assume is not odd. Then for some integer . So which is to say is even. Therefore is not odd.       "
},
{
  "id": "exercise-97",
  "level": "2",
  "url": "section-prop-supplementatal.html#exercise-97",
  "type": "Exercise",
  "number": "2.6.11",
  "title": "",
  "body": " You come across four trolls playing bridge. They declare:   Troll 1: All trolls here see at least one knave.  Troll 2: I see at least one troll that sees only knaves.  Troll 3: Some trolls are scared of goats.  Troll 4: All trolls are scared of goats.   Are there any trolls that are not scared of goats? Recall, of course, that all trolls are either knights (who always tell the truth) or knaves (who always lie).  "
},
{
  "id": "section-numtheory-divcong",
  "level": "1",
  "url": "section-numtheory-divcong.html",
  "type": "Section",
  "number": "3.1",
  "title": "Divisibility and Congruences",
  "body": " Divisibility and Congruences   The purpose of this section is twofold. First, Now that we have some experience with mathematical proof, we're now going to expand the types of questions we can prove by introducing the Divides and Congruence relations. Second, this is the first step in building the tools we need towards working with some encryption algorithms.    The Divides Relation   Any time we say number in the context of divides, congruence, or number theory we mean integer.   In , we saw the divides relation. Because we're going to use this relation frequently, we will introduce its own notation.   The Divides Relation   Let be two integers with . We say divides and write if there exists an integer such that .  We say that is a factor of , and is a multiple of .      The following are examples of the divides relation:   since    since    Here are some non-examples:   since there is no integer for which .  . Order matters.      This is a good time to remember that the relational statment is a propositional statement. It is true or false. Let's compare the divides relation with some similar symbols.    What kind of object are each of the following? What is the value, truth or numeric?             This is a statement. It is saying 2 divides into 8 evenly. This statement is true.  This is a number. Its value is 4, since the remainder of 14 divided by 5 is 4.  This is a number. Its value is 5.  This is a statement. It says 8 divides into 4 evenly. This is false.  This is a number. Its value is 2.      The divisibility relation has some very nice properties that let us practice our new skill of mathematical proof on this new object.   Properties of divisibility   Let with . Then:  If and then .  If then for all .  If and then .           If with such that and , then where are some integers.        The Division Algorithm   Let be an integer and be a positive integer. Then there exist unique integers such that    This theorem is badly named. It's not actually an algorithm , a series steps to arrive at an answer. That's what it's always called, though. 🤷‍♂️       Use the Division Algorithm to write each division as with , with the variables defined in the statement above.                 The Congruence Relation   The Congruence Relation   Let be two integers and be a positive integer. We say that is congruent to modulo if   We write   We call the modulus .      Each of these statements is true:                  Let's compare the the congruence relation with the modulus operator :   is a logical statement . It tells us that and are related, that is, the statement is true.   is a mathematical operation . The result is a number.  The difference is subtle but important.    Congruence Classes   If is an integer and is a positive integer, we define the congruence class of modulo to be the set of all integers congruent to modulo .       What congruence class is indicated by the set:                 Find all congruence classes modulo 5.    To what numbers is 0 congruent modulo 5? Is 1? 2? 3? 4? 5? 6? 7?... Have we covered everything?    There are a total of five congruence classes modulo 5:                 In general, there will always be distinct congruence classes modulo .      Let be a positive integer. Then integers are congruent modulo if and only if there exists and integer such that .         Let be a positive integer. If and then        We call the collection of the operations of addition and multiplication modulo  modular arithmetic .   For modular arithmetic, we have addition and multiplication. Subtraction is done via additive inverses, but division is not a defined operation! We'll discuss multiplicative inverses in section .        Show that if , then    If , how can we write that ?    Show that if are integers with such that then .    Assume that are integers with and such that . Then there exists an integer such   Since , we can divide both sides of the equation by , yielding the equality . Thus .     Use the division algorithm to write the following divisions as with the variables defined in the theorem:  17 is divided by 9  1234 is divided by 23  0 is divided by 13  8 is divided by 1               Determine whether the following integers are congruent to 3 modulo 7:  37  66  -17  -67  80       Since is not divisible by 7, we conclude  Since is divisible by 7, we conclude  Since is not divisible by 7, we conclude  Since is divisible by 7, we conclude  Since is divisible by 7, we conclude      List all integers between -100 and 100 that are congruent to -1 modulo 25   These numbers are all numbers that are of the form for integers .    Suppose that are integers, and . Find the integer with such that:            10  8  0  6  0      Find counterexamples to the following statements:  If where with , then .  If and where with , then .    The first part of this exercise should convince you: you cannot divide both sides by in modular arithmetic!     One possible counterexample is . Certainly but .  One possible counterexample here is . Then we can see satisfies both parts of the hypothesis, but while .      "
},
{
  "id": "note-9",
  "level": "2",
  "url": "section-numtheory-divcong.html#note-9",
  "type": "Note",
  "number": "3.1.1",
  "title": "",
  "body": " Any time we say number in the context of divides, congruence, or number theory we mean integer.  "
},
{
  "id": "definition-40",
  "level": "2",
  "url": "section-numtheory-divcong.html#definition-40",
  "type": "Definition",
  "number": "3.1.2",
  "title": "The Divides Relation.",
  "body": " The Divides Relation   Let be two integers with . We say divides and write if there exists an integer such that .  We say that is a factor of , and is a multiple of .   "
},
{
  "id": "example-67",
  "level": "2",
  "url": "section-numtheory-divcong.html#example-67",
  "type": "Example",
  "number": "3.1.3",
  "title": "",
  "body": "  The following are examples of the divides relation:   since    since    Here are some non-examples:   since there is no integer for which .  . Order matters.     "
},
{
  "id": "example-68",
  "level": "2",
  "url": "section-numtheory-divcong.html#example-68",
  "type": "Example",
  "number": "3.1.4",
  "title": "",
  "body": "  What kind of object are each of the following? What is the value, truth or numeric?             This is a statement. It is saying 2 divides into 8 evenly. This statement is true.  This is a number. Its value is 4, since the remainder of 14 divided by 5 is 4.  This is a number. Its value is 5.  This is a statement. It says 8 divides into 4 evenly. This is false.  This is a number. Its value is 2.     "
},
{
  "id": "proposition-1",
  "level": "2",
  "url": "section-numtheory-divcong.html#proposition-1",
  "type": "Proposition",
  "number": "3.1.5",
  "title": "Properties of divisibility.",
  "body": " Properties of divisibility   Let with . Then:  If and then .  If then for all .  If and then .        "
},
{
  "id": "corollary-1",
  "level": "2",
  "url": "section-numtheory-divcong.html#corollary-1",
  "type": "Corollary",
  "number": "3.1.6",
  "title": "",
  "body": "  If with such that and , then where are some integers.      "
},
{
  "id": "theorem-2",
  "level": "2",
  "url": "section-numtheory-divcong.html#theorem-2",
  "type": "Theorem",
  "number": "3.1.7",
  "title": "The Division Algorithm.",
  "body": " The Division Algorithm   Let be an integer and be a positive integer. Then there exist unique integers such that    This theorem is badly named. It's not actually an algorithm , a series steps to arrive at an answer. That's what it's always called, though. 🤷‍♂️    "
},
{
  "id": "example-69",
  "level": "2",
  "url": "section-numtheory-divcong.html#example-69",
  "type": "Example",
  "number": "3.1.8",
  "title": "",
  "body": "  Use the Division Algorithm to write each division as with , with the variables defined in the statement above.              "
},
{
  "id": "definition-41",
  "level": "2",
  "url": "section-numtheory-divcong.html#definition-41",
  "type": "Definition",
  "number": "3.1.9",
  "title": "The Congruence Relation.",
  "body": " The Congruence Relation   Let be two integers and be a positive integer. We say that is congruent to modulo if   We write   We call the modulus .   "
},
{
  "id": "example-70",
  "level": "2",
  "url": "section-numtheory-divcong.html#example-70",
  "type": "Example",
  "number": "3.1.10",
  "title": "",
  "body": "  Each of these statements is true:                "
},
{
  "id": "note-10",
  "level": "2",
  "url": "section-numtheory-divcong.html#note-10",
  "type": "Note",
  "number": "3.1.11",
  "title": "",
  "body": " Let's compare the the congruence relation with the modulus operator :   is a logical statement . It tells us that and are related, that is, the statement is true.   is a mathematical operation . The result is a number.  The difference is subtle but important.  "
},
{
  "id": "definition-42",
  "level": "2",
  "url": "section-numtheory-divcong.html#definition-42",
  "type": "Definition",
  "number": "3.1.12",
  "title": "Congruence Classes.",
  "body": " Congruence Classes   If is an integer and is a positive integer, we define the congruence class of modulo to be the set of all integers congruent to modulo .    "
},
{
  "id": "example-71",
  "level": "2",
  "url": "section-numtheory-divcong.html#example-71",
  "type": "Example",
  "number": "3.1.13",
  "title": "",
  "body": "  What congruence class is indicated by the set:              "
},
{
  "id": "example-72",
  "level": "2",
  "url": "section-numtheory-divcong.html#example-72",
  "type": "Example",
  "number": "3.1.14",
  "title": "",
  "body": "  Find all congruence classes modulo 5.    To what numbers is 0 congruent modulo 5? Is 1? 2? 3? 4? 5? 6? 7?... Have we covered everything?    There are a total of five congruence classes modulo 5:                 In general, there will always be distinct congruence classes modulo .   "
},
{
  "id": "proposition-2",
  "level": "2",
  "url": "section-numtheory-divcong.html#proposition-2",
  "type": "Proposition",
  "number": "3.1.15",
  "title": "",
  "body": "  Let be a positive integer. Then integers are congruent modulo if and only if there exists and integer such that .      "
},
{
  "id": "proposition-3",
  "level": "2",
  "url": "section-numtheory-divcong.html#proposition-3",
  "type": "Proposition",
  "number": "3.1.16",
  "title": "",
  "body": "  Let be a positive integer. If and then       "
},
{
  "id": "p-829",
  "level": "2",
  "url": "section-numtheory-divcong.html#p-829",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "modular arithmetic "
},
{
  "id": "note-11",
  "level": "2",
  "url": "section-numtheory-divcong.html#note-11",
  "type": "Note",
  "number": "3.1.17",
  "title": "",
  "body": " For modular arithmetic, we have addition and multiplication. Subtraction is done via additive inverses, but division is not a defined operation! We'll discuss multiplicative inverses in section .   "
},
{
  "id": "exercise-98",
  "level": "2",
  "url": "section-numtheory-divcong.html#exercise-98",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " Show that if , then    If , how can we write that ?  "
},
{
  "id": "exercise-99",
  "level": "2",
  "url": "section-numtheory-divcong.html#exercise-99",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " Show that if are integers with such that then .    Assume that are integers with and such that . Then there exists an integer such   Since , we can divide both sides of the equation by , yielding the equality . Thus .   "
},
{
  "id": "exercise-100",
  "level": "2",
  "url": "section-numtheory-divcong.html#exercise-100",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": " Use the division algorithm to write the following divisions as with the variables defined in the theorem:  17 is divided by 9  1234 is divided by 23  0 is divided by 13  8 is divided by 1             "
},
{
  "id": "exercise-101",
  "level": "2",
  "url": "section-numtheory-divcong.html#exercise-101",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": " Determine whether the following integers are congruent to 3 modulo 7:  37  66  -17  -67  80       Since is not divisible by 7, we conclude  Since is divisible by 7, we conclude  Since is not divisible by 7, we conclude  Since is divisible by 7, we conclude  Since is divisible by 7, we conclude    "
},
{
  "id": "exercise-102",
  "level": "2",
  "url": "section-numtheory-divcong.html#exercise-102",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": " List all integers between -100 and 100 that are congruent to -1 modulo 25   These numbers are all numbers that are of the form for integers .  "
},
{
  "id": "exercise-103",
  "level": "2",
  "url": "section-numtheory-divcong.html#exercise-103",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": " Suppose that are integers, and . Find the integer with such that:            10  8  0  6  0    "
},
{
  "id": "exercise-104",
  "level": "2",
  "url": "section-numtheory-divcong.html#exercise-104",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": " Find counterexamples to the following statements:  If where with , then .  If and where with , then .    The first part of this exercise should convince you: you cannot divide both sides by in modular arithmetic!     One possible counterexample is . Certainly but .  One possible counterexample here is . Then we can see satisfies both parts of the hypothesis, but while .    "
},
{
  "id": "section-primes",
  "level": "1",
  "url": "section-primes.html",
  "type": "Section",
  "number": "3.2",
  "title": "Prime Numbers",
  "body": " Prime Numbers   Like atoms making up molecules, prime numbers are the fundamental building blocks of the integers. In this section we see this in The Fundamental Theorem of Arithmetic, and explore some interesting statements prime numbers. We conclude the section with primality testing -- how to determine if a number is prime.       Prime Numbers   A positive integer is called prime if the only positive factors of are itself.  A positive integer which is not prime is called     The next logical question students ask is what about 1? because its only positive factors are 1 and itself. One is special.   1 is the loneliest number  1 is neither prime nor composite. It's called a unit .   Our next proposition, along with the proof that the square root of 2 is irrational , is the most classic example of a proof by contradiction. It's hard (impossible?) to prove directly that there are infinitely many primes. Instead, we assume there are finitely many and then find a contradiction.    There are infinitely many primes.    Assume, to the contrary, that there are only finitely many primes. Let's call them . Consider the number the product of every prime, plus one.  Because is larger than the largest prime, , we know that isn't in our list of primes and therefore is composite. Then there is some prime that divides it.  But since and , we see that meaning that But this is a contradiction since the only divisor of 1 is itself. Our assumption was incorrect, and therefore we conclude that there are infinitely many primes.       Over our school careers, we've been factoring numbers for a long time. You've probably noticed there is a correct answer when you produce a factorization. For example, we might write: or , these are the same factorization, we just changed the order we multiplied. The next theorem, which underlies all arithmetic, tells us we can factor every integer and that there is really a correct answer.   The Fundamental Theorem of Arithmetic   Every integer greater than 1 can be written as a product of primes, and this product is unique up to the ordering of the prime factors.     If 1 were called a prime number, the factorization wouldn't be unique. For example, we could write 6 as: or or , or ...   The Fundamental Theorem of Arithmetic (FTA) is a non-constructive statement. It tells us that we can write every positive integer as a unique product of primes, but it doesn't tell us how . Instead we need to use trial division and guess-and-check methods.    Find the prime factorization of the following:  124  81  941  3780      Here are factor trees for each of the examples. To construct these, we divide each number by some prime factor and successively divide the remaining factor further until we're left with only prime factors.    Factor tree for 124       Factor tree for 81       Factor tree for 941, which is prime       Factor tree for 3780            Trying to determine the prime factors of an integer can be really time consuming, especially if a number is prime. Fortunately, the next theorem tells us just how far we have to check in order to test primality or find a prime divisor.    If is a positive composite number, then has a prime divisor less than or equal to .     Brute Force Trial Division   To determine if a number is prime, one only needs to test all possible prime divisors up to .  Use trial division to determine that 251 is prime.    Since , we only need to check prime numbers which are less than 15. These are Since none of these divide into 251 evenly, we conclude that 251 is prime.         Use trial division to determine if any of the following are prime:  127  143  54323        Since, , we need only test primes up through 11. Noticing that none of 2, 3, 5, 7, or 11 divide evenly, we conclude 127 is prime.  Here, so again we test only up through 11, the largest prime under 12.. We check that 2, 3, 5, 7 do not work but , so we see that is not a prime number.  For , meaning we need to check every prime less than 233. In order to solve this, let's find a method to develop that list...       Sieve of Eratosthenes   In order to generate a list of all prime numbers less than or equal to , start with a tabular listing of integers from 1 to we run the following sieve or filter:  Cross off the number 1.   Continuing until you reach :  Circle the next, non-crossed out number. It's prime.  Cross out every multiple of this number.  Repeat.       Run the Sieve on this table of integers from 1 to 100.   Integers from 1 to 100    1  2  3  4  5  6  7  8  9  10    11  12  13  14  15  16  17  18  19  20    21  22  23  24  25  26  27  28  29  30    31  32  33  34  35  36  37  38  39  40    41  42  43  44  45  46  47  48  49  50    51  52  53  54  55  56  57  58  59  60    61  62  63  64  65  66  67  68  69  70    71  72  73  74  75  76  77  78  79  80    81  82  83  84  85  86  87  88  89  90    91  92  93  94  95  96  97  98  99  100       Here is the completed table after running the sieve algorithm:   Table of numbers from 1 to 100. Every number is crossed off except for those which are prime: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 83, 89, 97, which is the complete set of primes less than 100.          Computer Corner - Implementing the Sieve  Implementing the step algorithm is very straight-forward.  Make a large list of integers  Delete 1  Delete every multiple of each prime we encounter  I'm choosing to implement this in Python in an inefficient, but readable way, so that we can run it in a Sage cell below. If you want to see it in your favorite language, you can find it implemented in many, many different languages on Rosetta Code    List lookup and removing items from lists is a very computationally expensive operation; on the order of . That said, I'm only demonstrating small examples for class, so I'm trading efficiency for clarity of the algorithm. In practice you'd want to use more efficient data structures.    We can now return to determining if 54323 is prime . We now have a way of generating a list of primes up to , and we can test primality by trial division. We put it all together in the following function is_it_prime :      Find the prime factorization of each of the following integers:  39  125  101  143  289  899              is prime - trial divide by 2, 3, 5, 7               Find the prime factorization of (10 factorial, not yay ten! )   Recall . So we can do the following:     Using the is_it_prime function above (or write your own in your favorite language!), factor the following large integers.  654321  123456  987654321  123456789     Begin by changing integer_to_check to 654321 and see that 3 divides it. Then make integer_to_check = 218107 and repeat...                    Prove that every prime number greater than 3 is either one more or one less than a multiple of 6.   Prove the contrapositive by cases.   This question is of the form if is a prime number greater than three, then either or for some integer .   (by contraposition). Assume that is not a number of the form or for some integer . This gives us four total cases:  Case 1: Assume for some integer . Then is not a prime number, since is divisible by both 2 and 3.  Case 2: Assume for some integer . Then is divisible by 2 and is hence not prime.  Case 3: assume for some integer . then is divisible by 3 and is hence not prime.  Case 4: assume for some integer . then is divisible by 2 and is hence not prime.  Thus if is not of the form or for some integer , is not prime. By contraposition, if is a prime greater than three then is of the form either or for some integer .     Give a proof for    What happens if we assume that every prime divisor of is bigger than ?   Our proof will go like this: factor into three parts, where are prime and is whatever is left with the factorization, such as where or where , but assuming those prime factors are bigger than , and look for the contradiction.   Assume, to the contrary, that every prime divisor of is greater than . Since is composite, it has at least two prime factors, so that where is some positive integer. But since are a prime divisors of , by our assumption, . So: But since and , is a contradiction. This means our original assumption, that every prime factor of was greater than was wrong, and therefore we conclude that has a prime factor less than .     "
},
{
  "id": "definition-43",
  "level": "2",
  "url": "section-primes.html#definition-43",
  "type": "Definition",
  "number": "3.2.1",
  "title": "Prime Numbers.",
  "body": " Prime Numbers   A positive integer is called prime if the only positive factors of are itself.  A positive integer which is not prime is called    "
},
{
  "id": "note-12",
  "level": "2",
  "url": "section-primes.html#note-12",
  "type": "Note",
  "number": "3.2.2",
  "title": "1 is the loneliest number.",
  "body": " 1 is the loneliest number  1 is neither prime nor composite. It's called a unit .  "
},
{
  "id": "proposition-4",
  "level": "2",
  "url": "section-primes.html#proposition-4",
  "type": "Proposition",
  "number": "3.2.3",
  "title": "",
  "body": "  There are infinitely many primes.    Assume, to the contrary, that there are only finitely many primes. Let's call them . Consider the number the product of every prime, plus one.  Because is larger than the largest prime, , we know that isn't in our list of primes and therefore is composite. Then there is some prime that divides it.  But since and , we see that meaning that But this is a contradiction since the only divisor of 1 is itself. Our assumption was incorrect, and therefore we conclude that there are infinitely many primes.      "
},
{
  "id": "theorem-3",
  "level": "2",
  "url": "section-primes.html#theorem-3",
  "type": "Theorem",
  "number": "3.2.4",
  "title": "The Fundamental Theorem of Arithmetic.",
  "body": " The Fundamental Theorem of Arithmetic   Every integer greater than 1 can be written as a product of primes, and this product is unique up to the ordering of the prime factors.   "
},
{
  "id": "example-73",
  "level": "2",
  "url": "section-primes.html#example-73",
  "type": "Example",
  "number": "3.2.5",
  "title": "",
  "body": "  Find the prime factorization of the following:  124  81  941  3780      Here are factor trees for each of the examples. To construct these, we divide each number by some prime factor and successively divide the remaining factor further until we're left with only prime factors.    Factor tree for 124       Factor tree for 81       Factor tree for 941, which is prime       Factor tree for 3780           "
},
{
  "id": "thm-primes-under-sqrt",
  "level": "2",
  "url": "section-primes.html#thm-primes-under-sqrt",
  "type": "Theorem",
  "number": "3.2.6",
  "title": "",
  "body": "  If is a positive composite number, then has a prime divisor less than or equal to .   "
},
{
  "id": "example-74",
  "level": "2",
  "url": "section-primes.html#example-74",
  "type": "Example",
  "number": "3.2.7",
  "title": "Brute Force Trial Division.",
  "body": " Brute Force Trial Division   To determine if a number is prime, one only needs to test all possible prime divisors up to .  Use trial division to determine that 251 is prime.    Since , we only need to check prime numbers which are less than 15. These are Since none of these divide into 251 evenly, we conclude that 251 is prime.      "
},
{
  "id": "example-trial-division",
  "level": "2",
  "url": "section-primes.html#example-trial-division",
  "type": "Example",
  "number": "3.2.8",
  "title": "",
  "body": "  Use trial division to determine if any of the following are prime:  127  143  54323        Since, , we need only test primes up through 11. Noticing that none of 2, 3, 5, 7, or 11 divide evenly, we conclude 127 is prime.  Here, so again we test only up through 11, the largest prime under 12.. We check that 2, 3, 5, 7 do not work but , so we see that is not a prime number.  For , meaning we need to check every prime less than 233. In order to solve this, let's find a method to develop that list...     "
},
{
  "id": "example-76",
  "level": "2",
  "url": "section-primes.html#example-76",
  "type": "Example",
  "number": "3.2.9",
  "title": "Sieve of Eratosthenes.",
  "body": " Sieve of Eratosthenes   In order to generate a list of all prime numbers less than or equal to , start with a tabular listing of integers from 1 to we run the following sieve or filter:  Cross off the number 1.   Continuing until you reach :  Circle the next, non-crossed out number. It's prime.  Cross out every multiple of this number.  Repeat.       Run the Sieve on this table of integers from 1 to 100.   Integers from 1 to 100    1  2  3  4  5  6  7  8  9  10    11  12  13  14  15  16  17  18  19  20    21  22  23  24  25  26  27  28  29  30    31  32  33  34  35  36  37  38  39  40    41  42  43  44  45  46  47  48  49  50    51  52  53  54  55  56  57  58  59  60    61  62  63  64  65  66  67  68  69  70    71  72  73  74  75  76  77  78  79  80    81  82  83  84  85  86  87  88  89  90    91  92  93  94  95  96  97  98  99  100       Here is the completed table after running the sieve algorithm:   Table of numbers from 1 to 100. Every number is crossed off except for those which are prime: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 83, 89, 97, which is the complete set of primes less than 100.       "
},
{
  "id": "exercise-105",
  "level": "2",
  "url": "section-primes.html#exercise-105",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " Find the prime factorization of each of the following integers:  39  125  101  143  289  899              is prime - trial divide by 2, 3, 5, 7             "
},
{
  "id": "exercise-106",
  "level": "2",
  "url": "section-primes.html#exercise-106",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " Find the prime factorization of (10 factorial, not yay ten! )   Recall . So we can do the following:   "
},
{
  "id": "exercise-107",
  "level": "2",
  "url": "section-primes.html#exercise-107",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": " Using the is_it_prime function above (or write your own in your favorite language!), factor the following large integers.  654321  123456  987654321  123456789     Begin by changing integer_to_check to 654321 and see that 3 divides it. Then make integer_to_check = 218107 and repeat...                 "
},
{
  "id": "exercise-108",
  "level": "2",
  "url": "section-primes.html#exercise-108",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": " Prove that every prime number greater than 3 is either one more or one less than a multiple of 6.   Prove the contrapositive by cases.   This question is of the form if is a prime number greater than three, then either or for some integer .   (by contraposition). Assume that is not a number of the form or for some integer . This gives us four total cases:  Case 1: Assume for some integer . Then is not a prime number, since is divisible by both 2 and 3.  Case 2: Assume for some integer . Then is divisible by 2 and is hence not prime.  Case 3: assume for some integer . then is divisible by 3 and is hence not prime.  Case 4: assume for some integer . then is divisible by 2 and is hence not prime.  Thus if is not of the form or for some integer , is not prime. By contraposition, if is a prime greater than three then is of the form either or for some integer .   "
},
{
  "id": "exercise-109",
  "level": "2",
  "url": "section-primes.html#exercise-109",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": " Give a proof for    What happens if we assume that every prime divisor of is bigger than ?   Our proof will go like this: factor into three parts, where are prime and is whatever is left with the factorization, such as where or where , but assuming those prime factors are bigger than , and look for the contradiction.   Assume, to the contrary, that every prime divisor of is greater than . Since is composite, it has at least two prime factors, so that where is some positive integer. But since are a prime divisors of , by our assumption, . So: But since and , is a contradiction. This means our original assumption, that every prime factor of was greater than was wrong, and therefore we conclude that has a prime factor less than .   "
},
{
  "id": "section-gcd-euclid",
  "level": "1",
  "url": "section-gcd-euclid.html",
  "type": "Section",
  "number": "3.3",
  "title": "GCDs and The Euclidean Algorithm",
  "body": " GCDs and The Euclidean Algorithm   In this section we explore what factors that pairs of numbers can have in common. It will turn out that numbers that have only 1 as a common divisor are especially useful to encryption methods, so we give an algorithm to find the greatest common divisor and how to write it in a particularly helpful way.        Greatest Common Divisor (gcd)   Let be integers, not both zero. The largest integer such that and is called the greatest common divisor of which we denote by .  We say are relatively prime if .      Find the following (by listing prime factors):                   Least Common Multiple   Let be integers, not both zero. The smallest integer such that and is called the least common multiple of which we denote by .      Find the following:                    Let be two positive integers. Then      This essentially shows that the greatest common divisor and least common multiple are opposites of eachother in a particular way. If you know the greatest common divisor of , you can find the least common multiple by simply: .  The greatest common divisor is the more useful of the two, so we'll now give an algorithm that lets us find it without having to factor the number first.   The Euclidean Algorithm    2300+ years old  This is called the Euclidean Algorithm after Euclid of Alexandria because it was included in the book(s) of The Elements he wrote in around 300BCE. We don't know much about Euclid, but The Elements influenced all future Greek, Arab, and Western mathematics.   Let and be two positive integers where . If we apply the division algorithm recursively so that Then , the last non-zero remainder.      Here's a fully worked out example showing how to run the algorithm to find      According to the Euclidean Algorithm, the last non-zero remainder is the gcd, and so .      Find .        Bézout's Lemma   300 years old  This one is much less old; discovered by Étienne Bézout in the 18th century (1700's).    If are positive integers, then there exist integers such that      Bézout Coefficients   We call in the theorem above the Bézout coefficients of .     Back Substitution   We can reverse the Euclidean Algorithm to find the Bézout coefficients, a process that we'll call back substitution . We solve each equation in the Euclidean Algorithm for the remainder, and repeatedly substitute and combine like terms until we arrive at the gcd written as a linear combination of the original two numbers, in this case,      The remainders:   Substitution and combining like terms:    So is the linear combination we desired.      Express the gcd of 168 and 525 as a linear combination of those numbers.           Use the Euclidean algorithm to find .  Use back-substitution (reverse the steps of the Euclidean Algorithm) to write the greatest common divisor of 4147 and 10672 as a linear combination of those numbers.            Find the gcd via the Euclidean Algorithm and then use back-substitution to write the gcd as a linear combination of those numbers:            1)   -2)   13)         Use any method to find the greatest common divisor of 412 and 32.    . We can right it as the linear combination:     Use any method to find the greatest common divisor of 780 and 150.    . We can right the gcd as the linear combination     Find the greatest common divisor of 70, 98, 108.   Try looking at each pair of numbers separately.                    "
},
{
  "id": "definition-44",
  "level": "2",
  "url": "section-gcd-euclid.html#definition-44",
  "type": "Definition",
  "number": "3.3.1",
  "title": "Greatest Common Divisor (gcd).",
  "body": " Greatest Common Divisor (gcd)   Let be integers, not both zero. The largest integer such that and is called the greatest common divisor of which we denote by .  We say are relatively prime if .   "
},
{
  "id": "example-77",
  "level": "2",
  "url": "section-gcd-euclid.html#example-77",
  "type": "Example",
  "number": "3.3.2",
  "title": "",
  "body": "  Find the following (by listing prime factors):                 "
},
{
  "id": "definition-45",
  "level": "2",
  "url": "section-gcd-euclid.html#definition-45",
  "type": "Definition",
  "number": "3.3.3",
  "title": "Least Common Multiple.",
  "body": " Least Common Multiple   Let be integers, not both zero. The smallest integer such that and is called the least common multiple of which we denote by .   "
},
{
  "id": "example-78",
  "level": "2",
  "url": "section-gcd-euclid.html#example-78",
  "type": "Example",
  "number": "3.3.4",
  "title": "",
  "body": "  Find the following:                 "
},
{
  "id": "theorem-5",
  "level": "2",
  "url": "section-gcd-euclid.html#theorem-5",
  "type": "Theorem",
  "number": "3.3.5",
  "title": "",
  "body": "  Let be two positive integers. Then     "
},
{
  "id": "euclidean-algorithm",
  "level": "2",
  "url": "section-gcd-euclid.html#euclidean-algorithm",
  "type": "Theorem",
  "number": "3.3.6",
  "title": "The Euclidean Algorithm.",
  "body": " The Euclidean Algorithm    2300+ years old  This is called the Euclidean Algorithm after Euclid of Alexandria because it was included in the book(s) of The Elements he wrote in around 300BCE. We don't know much about Euclid, but The Elements influenced all future Greek, Arab, and Western mathematics.   Let and be two positive integers where . If we apply the division algorithm recursively so that Then , the last non-zero remainder.   "
},
{
  "id": "example-79",
  "level": "2",
  "url": "section-gcd-euclid.html#example-79",
  "type": "Example",
  "number": "3.3.7",
  "title": "",
  "body": "  Here's a fully worked out example showing how to run the algorithm to find      According to the Euclidean Algorithm, the last non-zero remainder is the gcd, and so .   "
},
{
  "id": "example-80",
  "level": "2",
  "url": "section-gcd-euclid.html#example-80",
  "type": "Example",
  "number": "3.3.8",
  "title": "",
  "body": "  Find .      "
},
{
  "id": "proposition-5",
  "level": "2",
  "url": "section-gcd-euclid.html#proposition-5",
  "type": "Proposition",
  "number": "3.3.9",
  "title": "Bézout’s Lemma.",
  "body": " Bézout's Lemma   300 years old  This one is much less old; discovered by Étienne Bézout in the 18th century (1700's).    If are positive integers, then there exist integers such that    "
},
{
  "id": "definition-46",
  "level": "2",
  "url": "section-gcd-euclid.html#definition-46",
  "type": "Definition",
  "number": "3.3.10",
  "title": "Bézout Coefficients.",
  "body": " Bézout Coefficients   We call in the theorem above the Bézout coefficients of .   "
},
{
  "id": "example-81",
  "level": "2",
  "url": "section-gcd-euclid.html#example-81",
  "type": "Example",
  "number": "3.3.11",
  "title": "Back Substitution.",
  "body": " Back Substitution   We can reverse the Euclidean Algorithm to find the Bézout coefficients, a process that we'll call back substitution . We solve each equation in the Euclidean Algorithm for the remainder, and repeatedly substitute and combine like terms until we arrive at the gcd written as a linear combination of the original two numbers, in this case,      The remainders:   Substitution and combining like terms:    So is the linear combination we desired.   "
},
{
  "id": "example-82",
  "level": "2",
  "url": "section-gcd-euclid.html#example-82",
  "type": "Example",
  "number": "3.3.12",
  "title": "",
  "body": "  Express the gcd of 168 and 525 as a linear combination of those numbers.      "
},
{
  "id": "example-83",
  "level": "2",
  "url": "section-gcd-euclid.html#example-83",
  "type": "Example",
  "number": "3.3.13",
  "title": "",
  "body": "    Use the Euclidean algorithm to find .  Use back-substitution (reverse the steps of the Euclidean Algorithm) to write the greatest common divisor of 4147 and 10672 as a linear combination of those numbers.        "
},
{
  "id": "exercise-110",
  "level": "2",
  "url": "section-gcd-euclid.html#exercise-110",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " Find the gcd via the Euclidean Algorithm and then use back-substitution to write the gcd as a linear combination of those numbers:            1)   -2)   13)       "
},
{
  "id": "exercise-111",
  "level": "2",
  "url": "section-gcd-euclid.html#exercise-111",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " Use any method to find the greatest common divisor of 412 and 32.    . We can right it as the linear combination:   "
},
{
  "id": "exercise-112",
  "level": "2",
  "url": "section-gcd-euclid.html#exercise-112",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": " Use any method to find the greatest common divisor of 780 and 150.    . We can right the gcd as the linear combination   "
},
{
  "id": "exercise-113",
  "level": "2",
  "url": "section-gcd-euclid.html#exercise-113",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": " Find the greatest common divisor of 70, 98, 108.   Try looking at each pair of numbers separately.      "
},
{
  "id": "section-multiplicative-inverses",
  "level": "1",
  "url": "section-multiplicative-inverses.html",
  "type": "Section",
  "number": "3.4",
  "title": "Multiplicative Inverses",
  "body": " Multiplicative Inverses      In our algebra and calculus classes, where we worked in and , all non-zero numbers had multiplicative inverses. For example, since . But , so it's not an object that we can use in modular arithmetic.  When we're working with only integers, in particular in congruence classes modulo an integer , fractions aren't a thing. Some numbers, though, do have multiplicative inverses. They're special, and we explore them in this section.  Why do we care? At this point, the only algebraic equations we can solve are of the form . The multiplicative inverses help us solve the algebraic, affine equations, .    Let be an integer and a positive integer. We define a multiplicative inverse of modulo to be an integer such that .      Since , we say that is a multiplicative inverse of 5 modulo 7. Similarly, 5 is a multiplicative inverse of 3 modulo 7.  We say that is a multiplicative inverse, rather than the multiplicative inverse, because every number in the congruence class is also an inverse! Observing that , and , we can check that:        etc          Find every multiple of 4 modulo 9.  Find the inverse of 4 modulo 9.      Here's the multiplication table. Remember to reduce modulo 9.   Multiplication table of 4 modulo 9    *  1  2  3  4  5  6  7  8  9    4  4  8  3  7  2  6  1  5  0     The inverse of 4 modulo 9 is 7. Why? Because .         Solve the congruence .    Given that above we found that the multiplicative inverse of 4 modulo 9 is 7, we need to multiply both sides by 7:          Let's create a multiplication table modulo 9. The following Sage code does it for us. You can change the variable n to other numbers to quickly generate other multiplication tables.  The output is a table\/matrix whose th entry is .     What is the inverse of 7 modulo 9?  Does 6 have an inverse modulo 9? Why or why not?  What numbers are invertible modulo 9? What numbers are not?        The inverse of 7 modulo 9 is 4. Notice that in the 7 column, 4th row, we see an entry of 1; that tells us and so they are inverses.  6 does not have an inverse modulo 9. See in the 6th column (or equivalently, 6th row), that there is never a value 1; no number multiplied by 6 gives 1.  Any number that has a 1 in its row\/column has an inverse. These are 1, 2, 4, 5, 7, 8. The other numbers: 3, 6 (and 0) do not have multiplicative inverses.         Computing a multiplication table is tedious if we just want to find a multiplicative inverse to solve a linear congruence. Similarly, guess-and-check is generally inefficient. Now we turn to a powerful fact that gives rise to an algorithm to find inverses.    If are relatively prime integers and , then an inverse of modulo exists.          The inverse of is its Bézout coefficient in the equality   The inverse is also unique (up to congruence), but we won't prove that here.       Solve          Solve the linear congruences, if possible. Explain if there are no solutions, one solution, or infinitely many solutions.                First, since , there is a unique solution to this recurrence. Using either the Euclidean Algorithm or guessing-and-checking, notice that , so . So we have:     Since , there isn't a unique solution! We can't use the Euclidean Algorithm to find our inverse and instead have to rely on trial and error.  Since , we have that 4 is one solution. Similarly, you can check that is also a solution.  This congruence has two solutions modulo 10, and .    As above, since , so there isn't a unique solution. Let's see what happens when we do the multiplication:   Multiplication table of 8 modulo 28    *  1  2  3  4  5  6  7  8    8  8  16  24  4  12  20  0  8     ... we could keep going... notice that as soon as we get back to , we have gone in a loop! The values will repeat.  Our first solution is , then , then , and finally     Here, since , again, no unique solution. Take a few moments to multiply values of 5 and notice it will never reach 4.  There is no solution to this congruence!        Solving systems with gcd other than 1  As we hinted in the previous example, we have three possibilities for the congruence :  A unique solution if   If , the congruence will have solutions if   And the system will have no solution if and     If the congruence has a solution, the complete set of solutions reduced modulo is given by: where , is an initial solution, and runs through , the set of remainders modulo d .  Take a moment to revisit the examples in using this formula.     Give a complete list of the solutions to the following congruences:            We begin first by finding , so there will not be a unique solution, but instead zero or four. Because , there will be four solutions reduced modulo 28.  Applying the method of solving congruences with multiple solutions , we need to find the first solution. Running through possible values of , we note that so that is the first solution. Then all solutions will be of the form: Plug in the values to find the complete solution set of     As above, first find . Since , we have seven total solutions reduced modulo 49.  To find the initial solution, test values of to find the first solution is Applying the formula we find all solutions to be: Plug in the values to find the complete solution set of           Solve the congruence:                       Find all solutions to the congruence (there could be more than one):         Here, since the coefficient of isn't relatively prime to the modulus there are either multiple answers per modulus or no solution.   Each of , , and satisfy the given equation. We can summarize this as    There is no solution to this equality. No multiple of 4 will ever have a remainder of 3 modulo 8.      Solve the following congruences. If none exists, explain why. If there are one or more solutions, give a complete list of solution(s).                       Since , there is a unique inverse. Using the Euclidean Algorithm we find that . Doing the algebra: is the unique solution.    Here so there is no unique solution. Instead, there are either no solutions or two solutions! But since the gcd doesn't divide , there are in fact no solutions to this congruence.    Since . Like the previous question there are either no solutions or two solutions. This time since the gcd does divide 16, we will have two solutions! The first is obviously , and the second will be, applying :     This time the modulus is 425, so we have meaning a unique solution exists the system. The Euclidean algorithm finds that , and solving the expression gives: ... which actually is both obvious and hilarious. It shows that even if we don't notice the obvious solution, the method will give us the correct result!    This time, as before, , so there are either zero or two solutions. But since there the gcd doesn't divide , there is no solution to the congruence.       Play around with making multiplication tables of various moduli in the Sage code in example .  What condition is required for a number to have an inverse modulo ?  What is a condition on for every element to have an inverse modulo ?  If there are more than one solution to , what is the relationship between each solution?       To have an inverse modulo , a number must be relatively prime to   To have the property that every number has an inverse modulo , the number must be prime  Not a solution, but a hint - take each example and exercise that had multiple solutions and subtract the solutions. What do you notice?      "
},
{
  "id": "p-931",
  "level": "2",
  "url": "section-multiplicative-inverses.html#p-931",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "affine "
},
{
  "id": "definition-47",
  "level": "2",
  "url": "section-multiplicative-inverses.html#definition-47",
  "type": "Definition",
  "number": "3.4.1",
  "title": "",
  "body": "  Let be an integer and a positive integer. We define a multiplicative inverse of modulo to be an integer such that .   "
},
{
  "id": "example-84",
  "level": "2",
  "url": "section-multiplicative-inverses.html#example-84",
  "type": "Example",
  "number": "3.4.2",
  "title": "",
  "body": "  Since , we say that is a multiplicative inverse of 5 modulo 7. Similarly, 5 is a multiplicative inverse of 3 modulo 7.  We say that is a multiplicative inverse, rather than the multiplicative inverse, because every number in the congruence class is also an inverse! Observing that , and , we can check that:        etc     "
},
{
  "id": "example-85",
  "level": "2",
  "url": "section-multiplicative-inverses.html#example-85",
  "type": "Example",
  "number": "3.4.3",
  "title": "",
  "body": "    Find every multiple of 4 modulo 9.  Find the inverse of 4 modulo 9.      Here's the multiplication table. Remember to reduce modulo 9.   Multiplication table of 4 modulo 9    *  1  2  3  4  5  6  7  8  9    4  4  8  3  7  2  6  1  5  0     The inverse of 4 modulo 9 is 7. Why? Because .      "
},
{
  "id": "example-86",
  "level": "2",
  "url": "section-multiplicative-inverses.html#example-86",
  "type": "Example",
  "number": "3.4.5",
  "title": "",
  "body": "  Solve the congruence .    Given that above we found that the multiplicative inverse of 4 modulo 9 is 7, we need to multiply both sides by 7:       "
},
{
  "id": "multiplication-table",
  "level": "2",
  "url": "section-multiplicative-inverses.html#multiplication-table",
  "type": "Example",
  "number": "3.4.6",
  "title": "",
  "body": "  Let's create a multiplication table modulo 9. The following Sage code does it for us. You can change the variable n to other numbers to quickly generate other multiplication tables.  The output is a table\/matrix whose th entry is .     What is the inverse of 7 modulo 9?  Does 6 have an inverse modulo 9? Why or why not?  What numbers are invertible modulo 9? What numbers are not?        The inverse of 7 modulo 9 is 4. Notice that in the 7 column, 4th row, we see an entry of 1; that tells us and so they are inverses.  6 does not have an inverse modulo 9. See in the 6th column (or equivalently, 6th row), that there is never a value 1; no number multiplied by 6 gives 1.  Any number that has a 1 in its row\/column has an inverse. These are 1, 2, 4, 5, 7, 8. The other numbers: 3, 6 (and 0) do not have multiplicative inverses.        "
},
{
  "id": "proposition-6",
  "level": "2",
  "url": "section-multiplicative-inverses.html#proposition-6",
  "type": "Proposition",
  "number": "3.4.7",
  "title": "",
  "body": "  If are relatively prime integers and , then an inverse of modulo exists.      "
},
{
  "id": "note-13",
  "level": "2",
  "url": "section-multiplicative-inverses.html#note-13",
  "type": "Note",
  "number": "3.4.8",
  "title": "",
  "body": "   The inverse of is its Bézout coefficient in the equality   The inverse is also unique (up to congruence), but we won't prove that here.    "
},
{
  "id": "example-88",
  "level": "2",
  "url": "section-multiplicative-inverses.html#example-88",
  "type": "Example",
  "number": "3.4.9",
  "title": "",
  "body": "  Solve       "
},
{
  "id": "example-inverses-multiple-solutions",
  "level": "2",
  "url": "section-multiplicative-inverses.html#example-inverses-multiple-solutions",
  "type": "Example",
  "number": "3.4.10",
  "title": "",
  "body": "  Solve the linear congruences, if possible. Explain if there are no solutions, one solution, or infinitely many solutions.                First, since , there is a unique solution to this recurrence. Using either the Euclidean Algorithm or guessing-and-checking, notice that , so . So we have:     Since , there isn't a unique solution! We can't use the Euclidean Algorithm to find our inverse and instead have to rely on trial and error.  Since , we have that 4 is one solution. Similarly, you can check that is also a solution.  This congruence has two solutions modulo 10, and .    As above, since , so there isn't a unique solution. Let's see what happens when we do the multiplication:   Multiplication table of 8 modulo 28    *  1  2  3  4  5  6  7  8    8  8  16  24  4  12  20  0  8     ... we could keep going... notice that as soon as we get back to , we have gone in a loop! The values will repeat.  Our first solution is , then , then , and finally     Here, since , again, no unique solution. Take a few moments to multiply values of 5 and notice it will never reach 4.  There is no solution to this congruence!      "
},
{
  "id": "note-inverses-solving-multiple",
  "level": "2",
  "url": "section-multiplicative-inverses.html#note-inverses-solving-multiple",
  "type": "Note",
  "number": "3.4.12",
  "title": "Solving systems with gcd other than 1.",
  "body": " Solving systems with gcd other than 1  As we hinted in the previous example, we have three possibilities for the congruence :  A unique solution if   If , the congruence will have solutions if   And the system will have no solution if and     If the congruence has a solution, the complete set of solutions reduced modulo is given by: where , is an initial solution, and runs through , the set of remainders modulo d .  Take a moment to revisit the examples in using this formula.  "
},
{
  "id": "example-90",
  "level": "2",
  "url": "section-multiplicative-inverses.html#example-90",
  "type": "Example",
  "number": "3.4.13",
  "title": "",
  "body": "  Give a complete list of the solutions to the following congruences:            We begin first by finding , so there will not be a unique solution, but instead zero or four. Because , there will be four solutions reduced modulo 28.  Applying the method of solving congruences with multiple solutions , we need to find the first solution. Running through possible values of , we note that so that is the first solution. Then all solutions will be of the form: Plug in the values to find the complete solution set of     As above, first find . Since , we have seven total solutions reduced modulo 49.  To find the initial solution, test values of to find the first solution is Applying the formula we find all solutions to be: Plug in the values to find the complete solution set of       "
},
{
  "id": "exercise-114",
  "level": "2",
  "url": "section-multiplicative-inverses.html#exercise-114",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " Solve the congruence:                     "
},
{
  "id": "exercise-115",
  "level": "2",
  "url": "section-multiplicative-inverses.html#exercise-115",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " Find all solutions to the congruence (there could be more than one):         Here, since the coefficient of isn't relatively prime to the modulus there are either multiple answers per modulus or no solution.   Each of , , and satisfy the given equation. We can summarize this as    There is no solution to this equality. No multiple of 4 will ever have a remainder of 3 modulo 8.    "
},
{
  "id": "exercise-116",
  "level": "2",
  "url": "section-multiplicative-inverses.html#exercise-116",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": " Solve the following congruences. If none exists, explain why. If there are one or more solutions, give a complete list of solution(s).                       Since , there is a unique inverse. Using the Euclidean Algorithm we find that . Doing the algebra: is the unique solution.    Here so there is no unique solution. Instead, there are either no solutions or two solutions! But since the gcd doesn't divide , there are in fact no solutions to this congruence.    Since . Like the previous question there are either no solutions or two solutions. This time since the gcd does divide 16, we will have two solutions! The first is obviously , and the second will be, applying :     This time the modulus is 425, so we have meaning a unique solution exists the system. The Euclidean algorithm finds that , and solving the expression gives: ... which actually is both obvious and hilarious. It shows that even if we don't notice the obvious solution, the method will give us the correct result!    This time, as before, , so there are either zero or two solutions. But since there the gcd doesn't divide , there is no solution to the congruence.     "
},
{
  "id": "exercise-117",
  "level": "2",
  "url": "section-multiplicative-inverses.html#exercise-117",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": " Play around with making multiplication tables of various moduli in the Sage code in example .  What condition is required for a number to have an inverse modulo ?  What is a condition on for every element to have an inverse modulo ?  If there are more than one solution to , what is the relationship between each solution?       To have an inverse modulo , a number must be relatively prime to   To have the property that every number has an inverse modulo , the number must be prime  Not a solution, but a hint - take each example and exercise that had multiple solutions and subtract the solutions. What do you notice?    "
},
{
  "id": "section-numtheory-modularexp",
  "level": "1",
  "url": "section-numtheory-modularexp.html",
  "type": "Section",
  "number": "3.5",
  "title": "Modular exponentiation",
  "body": " Modular exponentiation    This section seems a bit out of nowhere, but it's a computational tool we need in order to perform the RSA encryption algorithm. When we exponentiate a number, we always get a bigger number, and we'll want to reduce modulo . In this section we give an algorithm that allows us to perform this operation conveniently.  We begin first by showing how to do it \"by hand\" and then show how to do it using spreadsheet software.      We begin by breaking up a number into sums of powers of two. First, a quick refresher table of the first several powers of two:  Some small powers of two        1  2    2  4    3  8    4  16    5  32    6  64    7  128    8  256    9  512    10  1024    11  2048    12  4096        Find the binary representation of each of the following numbers:  24  255  2019         since that's       This one is a little more work, so I'm including my thinking as we break it down:        Now recall the basic exponents properties of exponents: and .  What's the connection? Let's take a look at repeatedly squaring a number, say :                          etc...  Each time we square a number, the exponent becomes the next power of 2. And because each number can be expressed as a sum of powers of two, we can exploit this fact using a process we'll call modular exponentiation.   Modular Exponentiation    Modular exponentiation is the process of repeatedly squaring and reducing a number modulo some integer, and then combining the results to find the required answer.      Here's a simple, typed example. We'll find       Find the binary representation of .     Repeatedly square and reduce six times. This works since , which is the highest power of in the binary representation of 82.         Note that it was a coincidence that we got into a loop of 29, 9, 29, ... But this will happen sometimes!    Now pick from the values above those entries which correspond to the binary representation of our desired power, 82. Since , we pick the entries corresponding to : Take note of the equivalence symbols used above. We write when the numbers represent equality and when we have reduced modulo 52.        Let's find using the square-and-reduce method.       For the first step, we write the exponent as sums of powers of two:     Second step, we repeatedly square and reduce, starting with 514 a total of 12 times since .  Before we get started, I want to admit that I did bring in a spreadsheet to help out. You're encouraged to as well! Excel, Google Sheets, and Apple Numbers all have a =MOD(number, modulus) that compute I created a table in Excel like this:    Sample table in excel    count  power of 2  value mod 711    0  2  =MOD(514, 711)    1  2  =MOD(C2*C2, 711)    2  4  =MOD(C3*C3, 711)      Screenshot of Excel sheet demonstrating what is described in the table    then you click-drag to expand the formula down until your count is 12 and power of 2 is 4096. This tells us the following equivalences, with asterisks marking those values we need to finish the computation:   *   *   *     *   *   *   *       *     *      Finally, we put it all together, bringing back the original expression and substituting what we found.    Why only multiply a couple numbers at a time and reduce? If we multiplied all those numbers on second to last line, we'd get 586869563497917784218400, which is over half of the number of known stars in the universe . Unless you have a really powerful calculator, you're going to get approximation errors and an incorrect answer!       Find the following:        Here are the numeric answers - but be sure you can do the process!  81  436  22      Now practice as many examples as you need! Make up your own three numbers. Pick your base , your exponent , and your modulus . Compute and check your work using the following Sage cell by changing the values a , e , and m in the code and clicking \"Evaluate (Sage)\".     "
},
{
  "id": "table-powers-of-two",
  "level": "2",
  "url": "section-numtheory-modularexp.html#table-powers-of-two",
  "type": "Table",
  "number": "3.5.1",
  "title": "Some small powers of two",
  "body": " Some small powers of two        1  2    2  4    3  8    4  16    5  32    6  64    7  128    8  256    9  512    10  1024    11  2048    12  4096    "
},
{
  "id": "example-91",
  "level": "2",
  "url": "section-numtheory-modularexp.html#example-91",
  "type": "Example",
  "number": "3.5.2",
  "title": "",
  "body": "  Find the binary representation of each of the following numbers:  24  255  2019         since that's       This one is a little more work, so I'm including my thinking as we break it down:       "
},
{
  "id": "definition-48",
  "level": "2",
  "url": "section-numtheory-modularexp.html#definition-48",
  "type": "Definition",
  "number": "3.5.3",
  "title": "Modular Exponentiation.",
  "body": " Modular Exponentiation    Modular exponentiation is the process of repeatedly squaring and reducing a number modulo some integer, and then combining the results to find the required answer.   "
},
{
  "id": "example-92",
  "level": "2",
  "url": "section-numtheory-modularexp.html#example-92",
  "type": "Example",
  "number": "3.5.4",
  "title": "",
  "body": "  Here's a simple, typed example. We'll find       Find the binary representation of .     Repeatedly square and reduce six times. This works since , which is the highest power of in the binary representation of 82.         Note that it was a coincidence that we got into a loop of 29, 9, 29, ... But this will happen sometimes!    Now pick from the values above those entries which correspond to the binary representation of our desired power, 82. Since , we pick the entries corresponding to : Take note of the equivalence symbols used above. We write when the numbers represent equality and when we have reduced modulo 52.     "
},
{
  "id": "example-93",
  "level": "2",
  "url": "section-numtheory-modularexp.html#example-93",
  "type": "Example",
  "number": "3.5.5",
  "title": "",
  "body": "  Let's find using the square-and-reduce method.       For the first step, we write the exponent as sums of powers of two:     Second step, we repeatedly square and reduce, starting with 514 a total of 12 times since .  Before we get started, I want to admit that I did bring in a spreadsheet to help out. You're encouraged to as well! Excel, Google Sheets, and Apple Numbers all have a =MOD(number, modulus) that compute I created a table in Excel like this:    Sample table in excel    count  power of 2  value mod 711    0  2  =MOD(514, 711)    1  2  =MOD(C2*C2, 711)    2  4  =MOD(C3*C3, 711)      Screenshot of Excel sheet demonstrating what is described in the table    then you click-drag to expand the formula down until your count is 12 and power of 2 is 4096. This tells us the following equivalences, with asterisks marking those values we need to finish the computation:   *   *   *     *   *   *   *       *     *      Finally, we put it all together, bringing back the original expression and substituting what we found.    Why only multiply a couple numbers at a time and reduce? If we multiplied all those numbers on second to last line, we'd get 586869563497917784218400, which is over half of the number of known stars in the universe . Unless you have a really powerful calculator, you're going to get approximation errors and an incorrect answer!   "
},
{
  "id": "exercise-118",
  "level": "2",
  "url": "section-numtheory-modularexp.html#exercise-118",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " Find the following:        Here are the numeric answers - but be sure you can do the process!  81  436  22    "
},
{
  "id": "exercise-119",
  "level": "2",
  "url": "section-numtheory-modularexp.html#exercise-119",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " Now practice as many examples as you need! Make up your own three numbers. Pick your base , your exponent , and your modulus . Compute and check your work using the following Sage cell by changing the values a , e , and m in the code and clicking \"Evaluate (Sage)\".   "
},
{
  "id": "section-numtheory-encryption",
  "level": "1",
  "url": "section-numtheory-encryption.html",
  "type": "Section",
  "number": "3.6",
  "title": "Application: Encryption",
  "body": " Application: Encryption   In this section, we discuss two types of encryption algorithms. The first is a simple algorithm that uses linear congruence functions to encrypt and decrypt. The second, despite being pretty simple to explain is one of the most common encryption algorithms in current use.     Basic Cipher Examples  Our convention will be to use only capital English letters, A to Z. We will identify each letter with the remainders modulo 26. As our purpose is introducing basics of encryption, we won't encrypt punctuation or spaces.   List of Alphabet Encoding          letter  number  letter  number  letter  number    A  0  J  9  S  18    B  1  K  10  T  19    C  2  L  11  U  20    D  3  M  12  V  21    E  4  N  13  W  22    F  5  O  14  X  23    G  6  P  15  Y  24    H  7  Q  16  Z  25    I  8  R  17          Shift Cipher   A shift cipher is one in which the letters of the alphabet have been shifted by some fixed amount.      The classic example is the so-called Caesar Cipher which shifts the alphabet to the right three letters. A becomes D, B becomes E, etc.  We encrypt letter-by-letter via the function and decrypt via .     Affine Cipher   An affine cipher is one in which letters are transformed via a linear function, where and . If , this is a shift cipher.     To be able to decrypt an affine function, we need in order that is an invertible element. We can find the inverse via the Euclidean Algorithm with back-substitution . Recall, the inverse of an invertible element is its Bézout coefficient.        The function is an example of an affine cipher function.   Encipher the following letters:  A  M      Given that , find the inverse of . Please ensure your coefficients are reduced modulo .   Verify your inverse by confirming it deciphers the letters above.          The RSA Algorithm   RSA is an example of a public-key algorithm. Its security is based on the fact that factoring integers is a hard problem . The process is outlined below:  To determine the keys:   Choose two prime numbers . Let and .   Maybe surprisingly, is the part of the algorithm that makes it secure. RSA's security comes from the fact that factoring large numbers is a very hard problem. If are both massively large numbers, then is essentially unfactorable in any reasonable amount of time.    Find any number which is relatively prime to .  Determine which is the inverse of modulo .  Your public key is .  Your private key is .    To encrypt\/decrypt:  Convert our message (plaintext or ciphertext) to numeric values, each letter taking up two digits: A is 00, B is 01, ... Z = 25.   Using the chosen value, we split the message into blocks of even length according to the following scheme:  If , then the blocks will be length 4  If , then the blocks will be length 6  If , then the blocks will be length 8  and so on...  if the message doesn't fit the appropriate block size, append a number of 23's at the end. (padding the message with X's).   Encryption occurs my taking each numeric message block and computing  Decryption occurs my taking each numeric cipher block and computing  This works because . Although we haven't proven this, it's a result of Euler's Totient Theorem which you'll revisit in future course on number theory.      Let . Choose Encrypt WHATS UP and then decrypt the result to confirm it worked. Do this by hand (with the help of a calculator).         Decrypt the following message, which was encrypted by the standard Caesar cipher: L FDQ DOZDBV WUXVW BRX, EUXWXV.     I can always trust you, Brutus.     Apply the affine shift to the string, Encrypt me.    Removing spaces from the words and capitalizing everything: NYZAXMOORN . The integer values are 13, 24, 25, 0, 23, 12, 14, 14, 17, 13.    Decrypt the text which was encrypted via the affine shift : LJNHFRN     Awesome .      Number Theory Using Sage  Sage has a convenient way of determining if a number is prime by asking if the number is in a set primes:   Try testing any number in the cell above.  If you want to just want to get a prime number of some particular size (as we want with our RSA activity ), we ask sage for the next_prime :   The following Sage code allows us to find the GCD and Bézout coefficients via the xgcd command:   The xgcd command returns a list of the form (gcd, first Bézout coefficient, second Bézout coefficient), and the code above pretty-prints this in a readable format.  In order to do modular exponentiation, we use the powermod function. For example, to compute :     The RSA Activity  In this activity, you will generate a public\/private key-pair. You will send me the public key and keep your private key secret (but don't lose it! If you lose your private key, you won't be able to complete the assignment and will receive no credit).  Pick two prime numbers of some interesting size. Make them at least six or seven digits long (use Sage's next_prime ).  Let , and pick any number relatively prime to .  Find the multiplicative inverse, , of modulo .  Let .  Record your numbers somewhere safe (but much of this is private! Keep it secret!).   Send me your public key on via email (you can click this link!) as: n = 15244346903 e = 751     I'll send you an encrypted message which will look like: [971896385, 3249912096, 4079022731, 8771096382, 10148198704]    Enter this information into the Sage cell below to decrypt it (using your ), change what_to_do to decrypt , and then press Evaluate(Python).  Send me the decrypted message to confirm you decrypted it correctly (remove the padded X's if relevant, and put appropriate spaces to make it a normal English statement. For example KEEPITSECRETKEEPITSAFEXX will not receive full credit.         "
},
{
  "id": "table-8",
  "level": "2",
  "url": "section-numtheory-encryption.html#table-8",
  "type": "Table",
  "number": "3.6.1",
  "title": "List of Alphabet Encoding",
  "body": " List of Alphabet Encoding          letter  number  letter  number  letter  number    A  0  J  9  S  18    B  1  K  10  T  19    C  2  L  11  U  20    D  3  M  12  V  21    E  4  N  13  W  22    F  5  O  14  X  23    G  6  P  15  Y  24    H  7  Q  16  Z  25    I  8  R  17        "
},
{
  "id": "definition-49",
  "level": "2",
  "url": "section-numtheory-encryption.html#definition-49",
  "type": "Definition",
  "number": "3.6.2",
  "title": "Shift Cipher.",
  "body": " Shift Cipher   A shift cipher is one in which the letters of the alphabet have been shifted by some fixed amount.   "
},
{
  "id": "example-94",
  "level": "2",
  "url": "section-numtheory-encryption.html#example-94",
  "type": "Example",
  "number": "3.6.3",
  "title": "",
  "body": "  The classic example is the so-called Caesar Cipher which shifts the alphabet to the right three letters. A becomes D, B becomes E, etc.  We encrypt letter-by-letter via the function and decrypt via .   "
},
{
  "id": "definition-50",
  "level": "2",
  "url": "section-numtheory-encryption.html#definition-50",
  "type": "Definition",
  "number": "3.6.4",
  "title": "Affine Cipher.",
  "body": " Affine Cipher   An affine cipher is one in which letters are transformed via a linear function, where and . If , this is a shift cipher.   "
},
{
  "id": "note-15",
  "level": "2",
  "url": "section-numtheory-encryption.html#note-15",
  "type": "Note",
  "number": "3.6.5",
  "title": "",
  "body": " To be able to decrypt an affine function, we need in order that is an invertible element. We can find the inverse via the Euclidean Algorithm with back-substitution . Recall, the inverse of an invertible element is its Bézout coefficient.     "
},
{
  "id": "example-95",
  "level": "2",
  "url": "section-numtheory-encryption.html#example-95",
  "type": "Example",
  "number": "3.6.6",
  "title": "",
  "body": "  The function is an example of an affine cipher function.   Encipher the following letters:  A  M      Given that , find the inverse of . Please ensure your coefficients are reduced modulo .   Verify your inverse by confirming it deciphers the letters above.        "
},
{
  "id": "definition-51",
  "level": "2",
  "url": "section-numtheory-encryption.html#definition-51",
  "type": "Definition",
  "number": "3.6.7",
  "title": "The RSA Algorithm.",
  "body": " The RSA Algorithm   RSA is an example of a public-key algorithm. Its security is based on the fact that factoring integers is a hard problem . The process is outlined below:  To determine the keys:   Choose two prime numbers . Let and .   Maybe surprisingly, is the part of the algorithm that makes it secure. RSA's security comes from the fact that factoring large numbers is a very hard problem. If are both massively large numbers, then is essentially unfactorable in any reasonable amount of time.    Find any number which is relatively prime to .  Determine which is the inverse of modulo .  Your public key is .  Your private key is .    To encrypt\/decrypt:  Convert our message (plaintext or ciphertext) to numeric values, each letter taking up two digits: A is 00, B is 01, ... Z = 25.   Using the chosen value, we split the message into blocks of even length according to the following scheme:  If , then the blocks will be length 4  If , then the blocks will be length 6  If , then the blocks will be length 8  and so on...  if the message doesn't fit the appropriate block size, append a number of 23's at the end. (padding the message with X's).   Encryption occurs my taking each numeric message block and computing  Decryption occurs my taking each numeric cipher block and computing  This works because . Although we haven't proven this, it's a result of Euler's Totient Theorem which you'll revisit in future course on number theory.   "
},
{
  "id": "example-96",
  "level": "2",
  "url": "section-numtheory-encryption.html#example-96",
  "type": "Example",
  "number": "3.6.8",
  "title": "",
  "body": "  Let . Choose Encrypt WHATS UP and then decrypt the result to confirm it worked. Do this by hand (with the help of a calculator).      "
},
{
  "id": "exercise-120",
  "level": "2",
  "url": "section-numtheory-encryption.html#exercise-120",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " Decrypt the following message, which was encrypted by the standard Caesar cipher: L FDQ DOZDBV WUXVW BRX, EUXWXV.     I can always trust you, Brutus.   "
},
{
  "id": "exercise-121",
  "level": "2",
  "url": "section-numtheory-encryption.html#exercise-121",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " Apply the affine shift to the string, Encrypt me.    Removing spaces from the words and capitalizing everything: NYZAXMOORN . The integer values are 13, 24, 25, 0, 23, 12, 14, 14, 17, 13.  "
},
{
  "id": "exercise-122",
  "level": "2",
  "url": "section-numtheory-encryption.html#exercise-122",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": " Decrypt the text which was encrypted via the affine shift : LJNHFRN     Awesome .  "
},
{
  "id": "section-objects-seqseries",
  "level": "1",
  "url": "section-objects-seqseries.html",
  "type": "Section",
  "number": "4.1",
  "title": "Sequences and Series",
  "body": " Sequences and Series   The next mathematical object we'll explore is an ordered collection. Unlike a set which is a loose collection of objects, for a sequence , order matters. For this reason, we can view a sequence simply as a function whose domain is the counting numbers. But since we will spend a lot of time in our mathematical career working with them (in this class and calc 2 for a start), we give sequences their own special notation.       Sequences   A sequence is a function from a subset of the integers (usually ) to a set . We use the notation to denote the image of the integer , and we call the -th term of the sequence.  We will often write the shorthand to denote the complete sequence where .    It's helpful to remember that is just a new shorthand for a function. You can think of as , with is name of the function (sequence) and is the input variable.    Find for the sequences:            Although there are many different types of sequences, two common ones we'll encounter regularly in this course are given below:   Arithmetic and Geometric Sequences   A arithmetic progression is a sequence of the form: with the initial term  and the common difference  .  A geometric progression is a sequence of the form: with the initial term  and the common ratio  .    Notice that the arithmetic sequence is of the form . Since is the variable and are constants, this is the form of a , so arithmetic sequences are the linear functions of sequences. The geometric on the other hand, is an exponential function.  The next type of sequences we encounter isn't one we've encountered in the calculus courses. These sequences are defined in terms of themselves. Each value that is computed depends on the value that comes before it.   Recurrence Relations \/ Recursive Sequences   A recurrence relation for a sequence is an equation that expressions in terms of previous terms.  A sequence is called a solution of a recurrence relation if its terms satisfy the recurrence relation.  We can always think of a sequence as a function, so the recurrence is the function: def a(n): return a(n-1) + a(n-1) with infinite recursion.     The Fibonacci Sequence   The Fibonacci sequence  is defined by the recurrence:     Fibonacci is from the Latin filius Bonacci meaning son of Bonacci . His name was Leondaro. He's responsible for bringing the Hindu-Arabic numbers to the west. In his book Liber Abaci he has one example that involves rabbits and this recursive relationship. But this is what he's known for. 🤦‍♂️ Also, have I mentioned I teach a course on math history every fall?   Note that the Fibonacci sequence has both the recursive definition and a definition for the first two terms of the sequence.         Consider the recurrence . Are the following sequences solutions to the recurrence?           A recurrence has a unique solution if it has initial data.  This would be a function defined with finite recursion, so the recurrence with and , the Fibonacci sequence, is the function: def F(n): if n == 0: return 0 elif n == 1: return 1 else: return F(n-1) + F(n-1)      Find the unique solution to each recurrence:  with  with           When finding the general form of a sequence, creativity is required.  Look for patterns within the sequence  Look for a common difference (arithmetic)  Look for a common ratio (geometric)  Do later terms depend on previous terms in a recursive way?  Are there cycles among the terms?  ...       Find a simple formula or rule that generates the terms of the sequence, and give the next three terms of the sequence.          Now given a sequence, what happens if you add these values together? The following notation will be familiar from calculus.   Series   Let be a sequence. We define a series of the sequence to be the summation of some subset of the terms of the sequence. We denote the sum by a capital sigma with sub- and superscript information in the following conventional way:   For example, the summation of terms from 0 to is expressed:       Find the value of the sum:               Verify the following formula for the sum of a geometric sequence, if , .         Show that           Find a formula for the following sums, using the telescoping example :   Using the sequence , find a formula for the sum by the finding the sum two ways.          Some Sum Formulas   shows us the following formula for an arithmetic series:   We will verify in the sum formula for the series of squares:   and we saw above that if , .     Computer Corner  Recurrence relations are like recursive functions. For example, you can find the th Fibonacci number, , by evaluating fibonacci(n)    The initial conditions of a a recurrence guarantee that it has a unique solution. These initial conditions are the terminal\/base conditions for the recursive functions. Because it's theoretical, math can go on forever, computers enter infinite loops:   Eventually, we'll get RecursionError: maximum recursion depth exceeded while calling a Python object      Find the first five terms of the sequence , beginning with :                     Is the sequence a solution of the recurrence relation if             Yes  No  No  Yes      Find a solution to the recurrence relation                 Find the value of each of the following sums:                    1533  510  8  510  3825      Using the telescoping example with the sequence , derive a formula for    This one's a lot of fun, so let's do it in a lot of detail. This is approach Blaise Pascal used to discover the formula in his 1654 Traité du triangle arithmétique .  Let . Then from , we have that:   We have from that and if we add a total of times, we have . Plugging these in, we find:   which is exactly the formula you learned in calculus!    Use the formula for geometric series to show that    Noting that this is a geometric series with common ratio 2 and first term 1, let in the geometric series formula: This is why a binary number which is all 1's is always one less than the next power of 2, e.g.     "
},
{
  "id": "p-1037",
  "level": "2",
  "url": "section-objects-seqseries.html#p-1037",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sequence "
},
{
  "id": "definition-52",
  "level": "2",
  "url": "section-objects-seqseries.html#definition-52",
  "type": "Definition",
  "number": "4.1.1",
  "title": "Sequences.",
  "body": " Sequences   A sequence is a function from a subset of the integers (usually ) to a set . We use the notation to denote the image of the integer , and we call the -th term of the sequence.  We will often write the shorthand to denote the complete sequence where .   "
},
{
  "id": "example-97",
  "level": "2",
  "url": "section-objects-seqseries.html#example-97",
  "type": "Example",
  "number": "4.1.2",
  "title": "",
  "body": "  Find for the sequences:           "
},
{
  "id": "definition-53",
  "level": "2",
  "url": "section-objects-seqseries.html#definition-53",
  "type": "Definition",
  "number": "4.1.3",
  "title": "Arithmetic and Geometric Sequences.",
  "body": " Arithmetic and Geometric Sequences   A arithmetic progression is a sequence of the form: with the initial term  and the common difference  .  A geometric progression is a sequence of the form: with the initial term  and the common ratio  .   "
},
{
  "id": "definition-54",
  "level": "2",
  "url": "section-objects-seqseries.html#definition-54",
  "type": "Definition",
  "number": "4.1.4",
  "title": "Recurrence Relations \/ Recursive Sequences.",
  "body": " Recurrence Relations \/ Recursive Sequences   A recurrence relation for a sequence is an equation that expressions in terms of previous terms.  A sequence is called a solution of a recurrence relation if its terms satisfy the recurrence relation.  We can always think of a sequence as a function, so the recurrence is the function: def a(n): return a(n-1) + a(n-1) with infinite recursion.   "
},
{
  "id": "fib-def",
  "level": "2",
  "url": "section-objects-seqseries.html#fib-def",
  "type": "Example",
  "number": "4.1.5",
  "title": "The Fibonacci Sequence.",
  "body": " The Fibonacci Sequence   The Fibonacci sequence  is defined by the recurrence:     Fibonacci is from the Latin filius Bonacci meaning son of Bonacci . His name was Leondaro. He's responsible for bringing the Hindu-Arabic numbers to the west. In his book Liber Abaci he has one example that involves rabbits and this recursive relationship. But this is what he's known for. 🤦‍♂️ Also, have I mentioned I teach a course on math history every fall?   Note that the Fibonacci sequence has both the recursive definition and a definition for the first two terms of the sequence.      "
},
{
  "id": "example-99",
  "level": "2",
  "url": "section-objects-seqseries.html#example-99",
  "type": "Example",
  "number": "4.1.6",
  "title": "",
  "body": "  Consider the recurrence . Are the following sequences solutions to the recurrence?         "
},
{
  "id": "note-16",
  "level": "2",
  "url": "section-objects-seqseries.html#note-16",
  "type": "Note",
  "number": "4.1.7",
  "title": "",
  "body": " A recurrence has a unique solution if it has initial data.  This would be a function defined with finite recursion, so the recurrence with and , the Fibonacci sequence, is the function: def F(n): if n == 0: return 0 elif n == 1: return 1 else: return F(n-1) + F(n-1)   "
},
{
  "id": "example-100",
  "level": "2",
  "url": "section-objects-seqseries.html#example-100",
  "type": "Example",
  "number": "4.1.8",
  "title": "",
  "body": "  Find the unique solution to each recurrence:  with  with         "
},
{
  "id": "note-17",
  "level": "2",
  "url": "section-objects-seqseries.html#note-17",
  "type": "Note",
  "number": "4.1.9",
  "title": "",
  "body": " When finding the general form of a sequence, creativity is required.  Look for patterns within the sequence  Look for a common difference (arithmetic)  Look for a common ratio (geometric)  Do later terms depend on previous terms in a recursive way?  Are there cycles among the terms?  ...    "
},
{
  "id": "example-101",
  "level": "2",
  "url": "section-objects-seqseries.html#example-101",
  "type": "Example",
  "number": "4.1.10",
  "title": "",
  "body": "  Find a simple formula or rule that generates the terms of the sequence, and give the next three terms of the sequence.         "
},
{
  "id": "definition-55",
  "level": "2",
  "url": "section-objects-seqseries.html#definition-55",
  "type": "Definition",
  "number": "4.1.11",
  "title": "Series.",
  "body": " Series   Let be a sequence. We define a series of the sequence to be the summation of some subset of the terms of the sequence. We denote the sum by a capital sigma with sub- and superscript information in the following conventional way:   For example, the summation of terms from 0 to is expressed:    "
},
{
  "id": "example-102",
  "level": "2",
  "url": "section-objects-seqseries.html#example-102",
  "type": "Example",
  "number": "4.1.12",
  "title": "",
  "body": "  Find the value of the sum:            "
},
{
  "id": "example-geometric-series",
  "level": "2",
  "url": "section-objects-seqseries.html#example-geometric-series",
  "type": "Example",
  "number": "4.1.13",
  "title": "",
  "body": "  Verify the following formula for the sum of a geometric sequence, if , .      "
},
{
  "id": "example-telescoping-sum",
  "level": "2",
  "url": "section-objects-seqseries.html#example-telescoping-sum",
  "type": "Example",
  "number": "4.1.14",
  "title": "",
  "body": "  Show that       "
},
{
  "id": "example-sum-of-integers",
  "level": "2",
  "url": "section-objects-seqseries.html#example-sum-of-integers",
  "type": "Example",
  "number": "4.1.15",
  "title": "",
  "body": "  Find a formula for the following sums, using the telescoping example :   Using the sequence , find a formula for the sum by the finding the sum two ways.        "
},
{
  "id": "note-some-sum-formulas",
  "level": "2",
  "url": "section-objects-seqseries.html#note-some-sum-formulas",
  "type": "Note",
  "number": "4.1.16",
  "title": "Some Sum Formulas.",
  "body": " Some Sum Formulas   shows us the following formula for an arithmetic series:   We will verify in the sum formula for the series of squares:   and we saw above that if , .  "
},
{
  "id": "exercise-123",
  "level": "2",
  "url": "section-objects-seqseries.html#exercise-123",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " Find the first five terms of the sequence , beginning with :                   "
},
{
  "id": "exercise-124",
  "level": "2",
  "url": "section-objects-seqseries.html#exercise-124",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " Is the sequence a solution of the recurrence relation if             Yes  No  No  Yes    "
},
{
  "id": "exercise-125",
  "level": "2",
  "url": "section-objects-seqseries.html#exercise-125",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": " Find a solution to the recurrence relation               "
},
{
  "id": "exercise-126",
  "level": "2",
  "url": "section-objects-seqseries.html#exercise-126",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": " Find the value of each of the following sums:                    1533  510  8  510  3825    "
},
{
  "id": "exercise-sum-of-squares",
  "level": "2",
  "url": "section-objects-seqseries.html#exercise-sum-of-squares",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": " Using the telescoping example with the sequence , derive a formula for    This one's a lot of fun, so let's do it in a lot of detail. This is approach Blaise Pascal used to discover the formula in his 1654 Traité du triangle arithmétique .  Let . Then from , we have that:   We have from that and if we add a total of times, we have . Plugging these in, we find:   which is exactly the formula you learned in calculus!  "
},
{
  "id": "exercise-128",
  "level": "2",
  "url": "section-objects-seqseries.html#exercise-128",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": " Use the formula for geometric series to show that    Noting that this is a geometric series with common ratio 2 and first term 1, let in the geometric series formula: This is why a binary number which is all 1's is always one less than the next power of 2, e.g.   "
},
{
  "id": "section-solvingrecurrences",
  "level": "1",
  "url": "section-solvingrecurrences.html",
  "type": "Section",
  "number": "4.2",
  "title": "Solving Recurrence Relations",
  "body": " Solving Recurrence Relations   Motivation, or, why do I care?  Let's imagine that we wanted to find the 10,000th term of the sequence with . The sequence is very simple: .  It turns out that the solution to this recurrence is . We can directly compute the value, and it takes Sage about 150 microseconds to give us the answer:   But if we wanted to actually have the computer find the 10,000th value via the recursive definition, Sage (computing via Python) can't even do it:   Explicit solutions are better when we want to be able to actually determine specific values of a recurrence.    Solving recurrence relations    The Towers of Hanoi is a puzzle with the goal of moving all disks from one peg to another peg. The puzzle has the following rules:  Place all the disks on the first peg in order of size with the largest on bottom.  Move one disk at a time to any other peg. A move is valid only if a smaller disk is placed on top a larger one.     The Animation of the Towers of Hanoi puzzle by André Karwath. There are three pegs and in this picture four disks. The animation proceeds to show moving the top disk to the far right peg. The next disk to the middle peg, then the smallest disk to the second peg... and so on until we have moved all disks to the third peg.   Let denote the number of moves to solve the puzzle with disks. Our goal is to find a solution to the sequence .  What is the recurrence relation that describes in terms of previous values?  Solve the recurrence relation.  The story accompanying the puzzle says that monks are currently solving the puzzle with 64 golden disks, and that the world will end when they finally solve the puzzle. Should we be concerned? Why or why not?           Recall that a bit string is a string containing only 0's and 1's. How many bit strings of length do not contain three consecutive 0's?    In this video I miscounted the number of bitstrings of length 4. I said but if you actually count the number of bitstrings, there's only . Oops!😅  Note that our solution to the recurrence, with and is still correct, and matches: , which is what I should have found.                    A vending machine dispensing books of stamps accepts $1 coins, $1 bills, and 5 bills. Find a recurrence relation for the number of ways to deposit dollars in the vending machine, where the order in which the bills are deposited matters.         Solving particularly nice recurrence relations   Linear, Homogeneous Recurrence Relations of Degree k   A linear homogeneous recurrence relation of degree with constant coefficients is a recurrence relation of the form where are real numbers with .        The Fibonacci sequence: is linear, and its coefficients are 1 and 1. The degree is 2.   is linear, and it coefficients are 2, 0, 0, 0, 1. Its degree is 5.       For the purposes of this learning the concept, we will restrict ourselves to degree two recurrences. This means the characteristic equations are quadratic and can be easily solved. The same process would apply if the characteristic equation were of higher degree - it's just that solving those equations isn't straightforward and takes away from focusing on the new material.  Now let's play with how we can actually solve this type of recurrence. Let's pretend that is a solution to the (degree two) recurrence relation for some variable .  Let's plug it in to the recurrence and simplify: This equation, , is a quadratic equation in the variable , and we'll give it a special name.   Characteristic Equation   We call the equation the characteristic equation of the recurrence relation. The solutions to this equation are the characteristic roots .      Let and be real numbers. Suppose that the characteristic equation has two distinct roots and . Then the sequence is a solution to the recurrence relation if, and only if for and and are constants.      Solve where and .       After using the characteristic root method, we find the answer is . We can confirm our answer by comparing this explicit solution with the recursive version using Python!       Let and be real numbers. Suppose that the characteristic equation has one and only one root . Then the sequence is a solution to the recurrence relation if, and only if for and and are constants.    Note the small differences between these statements. It is significant with respect to how you solve the sequence.    Solve where and .         Find an explicit formula for the Fibonacci numbers, with and .         Solve with and          Computer Corner  This computer corner isn't about a particular connection to computer science but rather just helping explain some of the Python functions I've used above as we checked our answers. You can use this to check your own answers! We'll walk through, changing one piece of code at a time as we build up our building blocks.   Here we're highlighting that sequences are actually just functions, and we can compute them via CS functions. They just happen to be functions defined only on    In Python, you define a function by writing def functionName(x): where x is the input variable and the colon is not optional. Everything inside the function must be indented!  Here's an example function that squares whatever is input.   The map function takes two inputs, the first is a function and the second is a list. map applies the function to each and every input in the list. It does this lazily , though, meaning that if you just call map(square, [1,2,3,4]) , you'll be returned a promise that Python will actually do the computation in the future. Here's what I mean:   ... Python returns map object at somememoryaddress because it refers to a map that hasn't actually been computed. If we want to actually find the value, we will explicitly ask Python to return a list of values. Wrap map into a list function call. print(list(map(square, [1,2,3,4])))   Next, instead of typing [1, 2, 3, 4] , we can use range(1, 5) to return the same list. range(a,b) returns all integers . Change the code above, replacing the typed-out list with a range: print(list(map(square, range(1, 5))))   There's one more feature we need. If we want to write an arbitrary power (such as or even ), we use the pow function . For example, is pow(x,2) , which is pow(2,x) . Try rewriting our square function to use it in place of x*x .  Now we can put it all together to check our solutions to recurrence relations. For example, in example , we found the solution was , then we can build the function a(n) that returns the right-side:   We can compare that against the recursive version of the sequence by writing the recursive function (the function calls itself):   It worked! Hooray! If you have questions about it, please don't hesitate to ask me.     Find a recurrence relation for the number of ways to give someone dollars if you have 1 dollar coins, 2 dollar coins, 2 dollar bills, and 4 dollar bills where the order in which the coins and bills are paid matters.         Solve the recurrence relation with .    . We should use telescoping or iteration here. For example, telescoping gives which telescopes to . Substituting and solving for completes the solution.     Show that is a solution to the recurrence relation .   We claim works. Plug it in: . This works - just simplify the right-hand side.     Find the solution to the recurrence relation with initial terms and .   By the Characteristic Root Technique. .     Find the solution to the recurrence relation with initial terms and using the characteristic root method..        While walking up stairs you notice that you have a habit of using 3 ways of taking one step and 4 ways of taking two steps at a time. Find a recurrence relation for the number of ways to go up steps. Solve the recurrence relation given the initial conditions of and using the characteristic root method.   The recurrence is . The solution with the given initial conditions is     Solve the recurrence where and using the characteristic root method.        Solve the recurrence where and using the characteristic root method.    you could write     "
},
{
  "id": "example-106",
  "level": "2",
  "url": "section-solvingrecurrences.html#example-106",
  "type": "Example",
  "number": "4.2.1",
  "title": "",
  "body": "  The Towers of Hanoi is a puzzle with the goal of moving all disks from one peg to another peg. The puzzle has the following rules:  Place all the disks on the first peg in order of size with the largest on bottom.  Move one disk at a time to any other peg. A move is valid only if a smaller disk is placed on top a larger one.     The Animation of the Towers of Hanoi puzzle by André Karwath. There are three pegs and in this picture four disks. The animation proceeds to show moving the top disk to the far right peg. The next disk to the middle peg, then the smallest disk to the second peg... and so on until we have moved all disks to the third peg.   Let denote the number of moves to solve the puzzle with disks. Our goal is to find a solution to the sequence .  What is the recurrence relation that describes in terms of previous values?  Solve the recurrence relation.  The story accompanying the puzzle says that monks are currently solving the puzzle with 64 golden disks, and that the world will end when they finally solve the puzzle. Should we be concerned? Why or why not?        "
},
{
  "id": "example-107",
  "level": "2",
  "url": "section-solvingrecurrences.html#example-107",
  "type": "Example",
  "number": "4.2.2",
  "title": "",
  "body": "  Recall that a bit string is a string containing only 0's and 1's. How many bit strings of length do not contain three consecutive 0's?    In this video I miscounted the number of bitstrings of length 4. I said but if you actually count the number of bitstrings, there's only . Oops!😅  Note that our solution to the recurrence, with and is still correct, and matches: , which is what I should have found.    "
},
{
  "id": "example-fifth-degree-recurrence",
  "level": "2",
  "url": "section-solvingrecurrences.html#example-fifth-degree-recurrence",
  "type": "Example",
  "number": "4.2.3",
  "title": "",
  "body": "  A vending machine dispensing books of stamps accepts $1 coins, $1 bills, and 5 bills. Find a recurrence relation for the number of ways to deposit dollars in the vending machine, where the order in which the bills are deposited matters.      "
},
{
  "id": "definition-56",
  "level": "2",
  "url": "section-solvingrecurrences.html#definition-56",
  "type": "Definition",
  "number": "4.2.4",
  "title": "Linear, Homogeneous Recurrence Relations of Degree k.",
  "body": " Linear, Homogeneous Recurrence Relations of Degree k   A linear homogeneous recurrence relation of degree with constant coefficients is a recurrence relation of the form where are real numbers with .   "
},
{
  "id": "example-109",
  "level": "2",
  "url": "section-solvingrecurrences.html#example-109",
  "type": "Example",
  "number": "4.2.5",
  "title": "",
  "body": "    The Fibonacci sequence: is linear, and its coefficients are 1 and 1. The degree is 2.   is linear, and it coefficients are 2, 0, 0, 0, 1. Its degree is 5.      "
},
{
  "id": "definition-57",
  "level": "2",
  "url": "section-solvingrecurrences.html#definition-57",
  "type": "Definition",
  "number": "4.2.6",
  "title": "Characteristic Equation.",
  "body": " Characteristic Equation   We call the equation the characteristic equation of the recurrence relation. The solutions to this equation are the characteristic roots .   "
},
{
  "id": "theorem-7",
  "level": "2",
  "url": "section-solvingrecurrences.html#theorem-7",
  "type": "Theorem",
  "number": "4.2.7",
  "title": "",
  "body": "  Let and be real numbers. Suppose that the characteristic equation has two distinct roots and . Then the sequence is a solution to the recurrence relation if, and only if for and and are constants.   "
},
{
  "id": "example-110",
  "level": "2",
  "url": "section-solvingrecurrences.html#example-110",
  "type": "Example",
  "number": "4.2.8",
  "title": "",
  "body": "  Solve where and .       After using the characteristic root method, we find the answer is . We can confirm our answer by comparing this explicit solution with the recursive version using Python!    "
},
{
  "id": "theorem-8",
  "level": "2",
  "url": "section-solvingrecurrences.html#theorem-8",
  "type": "Theorem",
  "number": "4.2.9",
  "title": "",
  "body": "  Let and be real numbers. Suppose that the characteristic equation has one and only one root . Then the sequence is a solution to the recurrence relation if, and only if for and and are constants.   "
},
{
  "id": "example-111",
  "level": "2",
  "url": "section-solvingrecurrences.html#example-111",
  "type": "Example",
  "number": "4.2.10",
  "title": "",
  "body": "  Solve where and .      "
},
{
  "id": "example-112",
  "level": "2",
  "url": "section-solvingrecurrences.html#example-112",
  "type": "Example",
  "number": "4.2.11",
  "title": "",
  "body": "  Find an explicit formula for the Fibonacci numbers, with and .      "
},
{
  "id": "example-7an-1-12an-2",
  "level": "2",
  "url": "section-solvingrecurrences.html#example-7an-1-12an-2",
  "type": "Example",
  "number": "4.2.12",
  "title": "",
  "body": "  Solve with and    "
},
{
  "id": "exercise-129",
  "level": "2",
  "url": "section-solvingrecurrences.html#exercise-129",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " Find a recurrence relation for the number of ways to give someone dollars if you have 1 dollar coins, 2 dollar coins, 2 dollar bills, and 4 dollar bills where the order in which the coins and bills are paid matters.      "
},
{
  "id": "exercise-130",
  "level": "2",
  "url": "section-solvingrecurrences.html#exercise-130",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " Solve the recurrence relation with .    . We should use telescoping or iteration here. For example, telescoping gives which telescopes to . Substituting and solving for completes the solution.  "
},
{
  "id": "exercise-131",
  "level": "2",
  "url": "section-solvingrecurrences.html#exercise-131",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": " Show that is a solution to the recurrence relation .   We claim works. Plug it in: . This works - just simplify the right-hand side.  "
},
{
  "id": "exercise-132",
  "level": "2",
  "url": "section-solvingrecurrences.html#exercise-132",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": " Find the solution to the recurrence relation with initial terms and .   By the Characteristic Root Technique. .  "
},
{
  "id": "exercise-133",
  "level": "2",
  "url": "section-solvingrecurrences.html#exercise-133",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": " Find the solution to the recurrence relation with initial terms and using the characteristic root method..      "
},
{
  "id": "exercise-134",
  "level": "2",
  "url": "section-solvingrecurrences.html#exercise-134",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": " While walking up stairs you notice that you have a habit of using 3 ways of taking one step and 4 ways of taking two steps at a time. Find a recurrence relation for the number of ways to go up steps. Solve the recurrence relation given the initial conditions of and using the characteristic root method.   The recurrence is . The solution with the given initial conditions is   "
},
{
  "id": "exercise-135",
  "level": "2",
  "url": "section-solvingrecurrences.html#exercise-135",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": " Solve the recurrence where and using the characteristic root method.      "
},
{
  "id": "exercise-136",
  "level": "2",
  "url": "section-solvingrecurrences.html#exercise-136",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": " Solve the recurrence where and using the characteristic root method.    you could write   "
},
{
  "id": "sec_logic_induction",
  "level": "1",
  "url": "sec_logic_induction.html",
  "type": "Section",
  "number": "4.3",
  "title": "Mathematical Induction",
  "body": " Mathematical Induction   In this section, we consider statements which involve some form of ... is true of every integer . For example,  For every integer , .   for every positive integer  These are sequences of statements and we'll be using a recursive technique to prove them, because we can't prove that a statement like this is true by showing it's true for every literal integer (there are infinitely many of them, so that's impossible). Instead, the principle of mathematical induction tells us we can prove statements like these are true, so long as we do it just right. This section helps us learn how to do just that.       Mathematical Induction   To prove that a statement is true for all integers , we use the principle of math induction . The process has two core steps:  Basis step: Prove that is true.  Inductive step: Assume that is true for some value of and show that is true.         The common analogy for induction is to imagine an infinite ladder. First, you put your foot on the bottom rung. If you're able to go from the -th rung to the -st rung, you'll be able to climb forever.    The model of induction will always follow the following structure:   Proof by math induction.  Basis step. [here you prove is true]   Inductive step. Assume is true for some [explicitly say what this statement is. This is called the inductive hypothesis ]. We will show is true.  [here you actually prove is true. You should use the inductive hypothesis. If you didn't, you've made an error somewhere]          Prove that .         Prove that if .           Find a formula for for by examining small values of .  Prove the conjecture you just made.           Prove that for          What is wrong with the following proof that all horses are the same color?  Proof by induction:   Base step: the statement is the statement one horse is the same color as itself . This is clearly true.    Induction step: Assume that is true for some integer . That is, any group of horses are all the same color.  Consider a group of horses. Let's line them up. If we look at first horses, our induction hypothesis tells us they are the same color. Similarly, if we look at the last horses, they are also the same color. This shows that all horses are the same color.   Thus, by math induction, all horses are the same color.      The next definition says strong induction , and I'm following the convention of nearly every discrete math book ever in defining this with its own name. The two concepts are really not very different, as we'll see below.   Strong Induction   The principal of strong math induction is like the so-called weak induction, except instead of proving , we assume that is true for all values of such that , and we show that the next statement, , is true.      Let be the statement that postage of cents can be formed using just 4 cent and 7 cent stamps . Prove is true for .    Here's a different approach to the problem. If we can construct postage using the four and seven cent stamps, then for the cent postage, We'll just pretend you asked for four cents less! . Were're guaranteed to be able to make the postage by the induction hypothesis. Imagine putting those stamps on the package. Then all we need is to glue on one four cent stamp and we're good to go!     Here's one way to approach the problem. Begin by showing we can do the basis, see if we can find a pattern, then make a formal proof:                                   Do you notice a pattern? Take a couple moments to think about it, then let's do the proof.   Basis step: We can form 18 cent postage using two 7 and one 4 cent stamp.  Inductive step: Assume that one can form postage for all values from 18 cents up to cents. Now we're asked to form cents. we know that we can form cents, so, without loss of generality, let's assume that it takes 7 cent stamps and 4 cent stamps. That is: Now, if , then we can do the following, adding one to both sides in two different ways: Combining like terms we have If, on the other hand, , then we need to add one in a different way: or, combining like terms: Thus, by inductive hypothesis, if we can form cents, I can form cents postage.  Therefore, by mathematical induction, every postage cost greater than or equal to 18 can be formed using 4 and 7 cent stamps.       Prove that every positive integer has a binary expansion, that is, it is either a power of two or it is a sum of distinct powers of two.        The difference between 'weak' and 'strong' induction  'Regular'\/'weak' induction follows the pattern:  Basis step.  Inductive hypothesis is is true  We show that implies that is true  That is, we use this induction process for claims where it's convenient to show that the pattern follows sequentially in a convenient way. Straight-forward examples are the addition formulas;  'Strong' induction follows the pattern:  Basis step(s). [may need more than one basis, just like some recurrence relations]  Inductive hypothesis is that all of are true. [this is the 'strong' part; it's a larger assumption]  We show that the hypothesis implies the next element in the sequence, , is true [like before]  the difference between this and the previous induction process is that it's sometimes not convenient to prove that directly connects to . Instead, we still need to show that the next element in the sequence is true by appealing to a previous element in the sequence.  Relevant examples are those like the binary representation of a number - that has a binary representation doesn't immediately tell us does, but if we can cut the number in half and use the binary representation of that number to scale-up in order to build a binary representation of .   We separate 'weak' and 'strong' induction, but they're really all the same thing. It's just that when it's convenient to show , we write fewer words for our inductive hypothesis. Because if we don't need to use the fact that is true for all , then we just omit that. Mathematicians are lazy.    Computer Corner  You'll be using mathematical induction when you're designing algorithms. Let's take the example of sorting a dataset. To prove that an algorithm is correct, you need:  There is a valid base case. In our example - it can sort a set of one element)  Assume the algorithm works for objects. It can sort a set of objects  Show that if you have a larger set of one more object, objects, your algorithm correctly sorts that new elements with the previous elements. It can sort a set with objects. Therefore, the algorithm is correct.    For example, we proved mathematically in that any postage over 18 cents can be made with 4 and 7 cent stamps. The proof of that gives rise to an algorithm that we know must be correct:       Use induction to prove for all that .    We must prove that for all . Thus let be the statement . We will prove that is true for all . First we establish the base case, , which claims that . Since , we see that is true. Now for the inductive case. Assume that is true for an arbitrary . That is, . We must show that is true (i.e., that ). To do this, we start with the left-hand side of and work to the right-hand side:   Thus is true so by the principle of mathematical induction, is true for all .      Prove that for all .    Let be the statement . We will prove that is true for all . First the base case, . We have which is true, so is established. Now the inductive case. Assume that is true for some fixed arbitrary . That is, . We will now prove that is also true (i.e., that ). We start with the left-hand side of and work to the right-hand side:   Thus holds, so by the principle of mathematical induction, is true for all .      Prove that for all . (Recall, .)    Let be the statement . We will show is true for all . First, we check the base case and see that yes, (as ) so is true. Now for the inductive case. Assume is true for an arbitrary . That is, . Now consider : . To prove this, we start with the left side and work to the right side.   Therefore so we have established . Thus by the principle of mathematical induction is true for all .      Prove that the sum of squares can be found as follows     Let be the statement . For the base case, we show that is true. That is: which is true.  For the inductive step, assume that is true for some integer , that is and consider the statement: which is exactly what we needed to show. Thus, by the principle of mathematical induction, the original statement is true for all integers .      What is wrong with the following proof of the fact that for all values of (besides of course that the thing it is claiming to prove is false)?   Let be the statement that . We will prove that is true for all . Assume, for induction that is true. That is, . We must show that is true. Now since , add 1 to both sides. This gives . Regrouping . But this is simply . Thus by the principle of mathematical induction is true for all .    The only problem is that we never established the base case. Of course, when , .     The proof in the previous problem does not work. But if we modify the fact, we can get a working proof. Prove that for all values of . You can do this proof with algebra (without induction), but the goal of this exercise is to write out a valid induction proof.    Let be the statement that . We will prove that is true for all . First, note that the base case holds: . Now assume for induction that is true. That is, . We must show that is true. Now since , add 1 to both sides. This gives . Regrouping . But this is simply . Thus by the principle of mathematical induction is true for all .      Find the flaw in the following proof of the fact that for every .   Let be the statement . We will prove is true for all . First we establish the base case: when , is true, because . Now for the inductive step, assume is true. That is, . Now if , then is some number, like 80. Of course which is still less than 100. So as well. But this is what claims, so we have shown that . Thus by the principle of mathematical induction, is true for all .    The problem here is that while is true, and while for some values of , there is at least one value of (namely ) when that implication fails. For a valid proof by induction, must be true for all values of greater than or equal to the base case.     What is wrong with the following proof of the fact that for all , the number is odd?   Let be the statement is odd. We will prove that is true for all . Suppose for induction that is true, that is, that is odd. Now consider the statement . Now . By the inductive hypothesis, is odd, and of course is even. An odd plus an even is always odd, so therefore is odd. Therefore by the principle of mathematical induction, is true for all .    Rather than give a solution, here's just a hint. What happens if is even?     Now give a valid proof (by induction, even though you might be able to do so without using induction) of the statement, for all , the number is even.     Let be the statement is even.   Basis step: when we have which is a even.  Inductive step: Assume that is true for some integer , that is, is even, and let's consider the following: now for some integer by inductive hypothesis, so we have: and thus is even.  Therefore, by math induction, is even for all natural numbers .     Use induction to prove that if people all shake hands with each other, that the total number of handshakes is .    Let be the statement when people shake hands with each other, there are a total of handshakes.   Base case: When , there will be one handshake, and . Thus is true.  Inductive case: Assume is true for arbitrary (that the number of handshakes among people is . What happens if a st person shows up? How many new handshakes take place? The new person must shake hands with everyone there, which is new handshakes. So the total is now , as needed.  Therefore, by the principle of mathematical induction, is true for all .      Use the product rule for logarithms ( ) to prove, by induction on , that , for all natural numbers .   The idea here is that if we take the logarithm of , we can increase by 1 if we multiply by another (inside the logarithm). This results in adding 1 more to the total.   Let be the statement . The base case, is true, because , by the product rule for logarithms. Now assume, for induction, that is true. That is, . Consider . We have with the last equality due to the inductive hypothesis. But this simplifies to , establishing . Therefore by the principle of mathematical induction, is true for all .      Let be differentiable functions. Prove, using induction, that   You may assume for any differentiable functions and . (You don't actually need to know calculus to be able to do this).   You are allowed to assume the base case. For the inductive case, group all but the last function together as one sum of functions, then apply the usual sum of derivatives rule, and then the inductive hypothesis.    Recall that is the th Fibonacci number defined in .  Prove, by mathematical induction, that .    Let be the statement .   Basis step: if then while so the basis step is true.  Inductive step: Assume that is true for some integer . That is, . Now consider thus is true.  Therefore, by math induction, for all natural numbers.      Prove that where is the th Fibonacci number.    Let be the statement . We will show that is true for all . First the base case is easy because and so . Now consider the inductive case. Assume is true, that is, assume . To establish we work from left to right:   Therefore , which is to say holds. Therefore by the principle of mathematical induction, is true for all .      Prove, using strong induction, that every natural number is either a Fibonacci number or can be written as the sum of distinct Fibonacci numbers.    Let be the statement that is either a Fibonacci number of the sum of distinct Fibonacci numbers  Basis step: For , we have that is a Fibonacci number.  Inductive step: Assume that there is an integer such that is true for all . That is, is either a Fibonacci number or the sum of distinct Fibonacci numbers. Now let's consider the next number, :  Case 1: If is a Fibonacci number, then we're done.  Case 2: If is not a Fibonacci number, then let be the largest Fibonacci number less than . Since then we have that is the sum of distinct Fibonacci numbers, by inductive hypothesis.  Adding to this sum gives us which then itself a sum of distinct Fibonacci numbers.  Thus, by induction, every natural number is either a Fibonacci number of the sum of distinct Fibonacci numbers.     Prove, by mathematical induction, that , where is the th Fibonacci number.    Let be the statement   Basis step: If then and so that is true.  Inductive step: Assume that is true for some integer . That is, and consider: And thus is true.  Therefore, by math induction, for all integers .     Prove, by mathematical induction, that , where is the th Fibonacci number.         Prove that there is a strictly increasing sequence of numbers (not necessarily integers) such that for all . (By strictly increasing we mean for all . So each term must be larger than the last.)    Let be the statement there is a strictly increasing sequence with . We will prove is true for all . First we establish the base case: says there is a single number with . This is true take . Now for the inductive step, assume is true. That is there exists a strictly increasing sequence with . Now consider this sequence, plus one more term, which is greater than but less than . Such a number exists, for example, the average between and 100. So then is true, so we have shown that . Thus by the principle of mathematical induction, is true for all .      Prove that 6 divides for all .   (Alternative idea to the below proof) In the inductive step add and subtract . That is, you'll have . Now algebra.    Let be the statement 6 divides . We will show is true for all . First we establish the base case, . Since , and is a multiple of 6, is true. Now for the inductive case. Assume holds for an arbitrary . That is, 6 divides , or in other words, for some integer . Now consider :   Therefore 6 divides , or in other words, is true. Therefore by the principle of mathematical induction, is true for all .     "
},
{
  "id": "definition-58",
  "level": "2",
  "url": "sec_logic_induction.html#definition-58",
  "type": "Definition",
  "number": "4.3.1",
  "title": "Mathematical Induction.",
  "body": " Mathematical Induction   To prove that a statement is true for all integers , we use the principle of math induction . The process has two core steps:  Basis step: Prove that is true.  Inductive step: Assume that is true for some value of and show that is true.        "
},
{
  "id": "example-114",
  "level": "2",
  "url": "sec_logic_induction.html#example-114",
  "type": "Example",
  "number": "4.3.2",
  "title": "",
  "body": "  The model of induction will always follow the following structure:   Proof by math induction.  Basis step. [here you prove is true]   Inductive step. Assume is true for some [explicitly say what this statement is. This is called the inductive hypothesis ]. We will show is true.  [here you actually prove is true. You should use the inductive hypothesis. If you didn't, you've made an error somewhere]       "
},
{
  "id": "example-115",
  "level": "2",
  "url": "sec_logic_induction.html#example-115",
  "type": "Example",
  "number": "4.3.3",
  "title": "",
  "body": "  Prove that .      "
},
{
  "id": "example-116",
  "level": "2",
  "url": "sec_logic_induction.html#example-116",
  "type": "Example",
  "number": "4.3.4",
  "title": "",
  "body": "  Prove that if .      "
},
{
  "id": "example-117",
  "level": "2",
  "url": "sec_logic_induction.html#example-117",
  "type": "Example",
  "number": "4.3.5",
  "title": "",
  "body": "    Find a formula for for by examining small values of .  Prove the conjecture you just made.        "
},
{
  "id": "example-118",
  "level": "2",
  "url": "sec_logic_induction.html#example-118",
  "type": "Example",
  "number": "4.3.6",
  "title": "",
  "body": "  Prove that for       "
},
{
  "id": "example-119",
  "level": "2",
  "url": "sec_logic_induction.html#example-119",
  "type": "Example",
  "number": "4.3.7",
  "title": "",
  "body": "  What is wrong with the following proof that all horses are the same color?  Proof by induction:   Base step: the statement is the statement one horse is the same color as itself . This is clearly true.    Induction step: Assume that is true for some integer . That is, any group of horses are all the same color.  Consider a group of horses. Let's line them up. If we look at first horses, our induction hypothesis tells us they are the same color. Similarly, if we look at the last horses, they are also the same color. This shows that all horses are the same color.   Thus, by math induction, all horses are the same color.   "
},
{
  "id": "definition-59",
  "level": "2",
  "url": "sec_logic_induction.html#definition-59",
  "type": "Definition",
  "number": "4.3.8",
  "title": "Strong Induction.",
  "body": " Strong Induction   The principal of strong math induction is like the so-called weak induction, except instead of proving , we assume that is true for all values of such that , and we show that the next statement, , is true.   "
},
{
  "id": "example-postage",
  "level": "2",
  "url": "sec_logic_induction.html#example-postage",
  "type": "Example",
  "number": "4.3.9",
  "title": "",
  "body": "  Let be the statement that postage of cents can be formed using just 4 cent and 7 cent stamps . Prove is true for .    Here's a different approach to the problem. If we can construct postage using the four and seven cent stamps, then for the cent postage, We'll just pretend you asked for four cents less! . Were're guaranteed to be able to make the postage by the induction hypothesis. Imagine putting those stamps on the package. Then all we need is to glue on one four cent stamp and we're good to go!     Here's one way to approach the problem. Begin by showing we can do the basis, see if we can find a pattern, then make a formal proof:                                   Do you notice a pattern? Take a couple moments to think about it, then let's do the proof.   Basis step: We can form 18 cent postage using two 7 and one 4 cent stamp.  Inductive step: Assume that one can form postage for all values from 18 cents up to cents. Now we're asked to form cents. we know that we can form cents, so, without loss of generality, let's assume that it takes 7 cent stamps and 4 cent stamps. That is: Now, if , then we can do the following, adding one to both sides in two different ways: Combining like terms we have If, on the other hand, , then we need to add one in a different way: or, combining like terms: Thus, by inductive hypothesis, if we can form cents, I can form cents postage.  Therefore, by mathematical induction, every postage cost greater than or equal to 18 can be formed using 4 and 7 cent stamps.    "
},
{
  "id": "example-121",
  "level": "2",
  "url": "sec_logic_induction.html#example-121",
  "type": "Example",
  "number": "4.3.10",
  "title": "",
  "body": "  Prove that every positive integer has a binary expansion, that is, it is either a power of two or it is a sum of distinct powers of two.      "
},
{
  "id": "note-19",
  "level": "2",
  "url": "sec_logic_induction.html#note-19",
  "type": "Note",
  "number": "4.3.11",
  "title": "The difference between ’weak’ and ’strong’ induction.",
  "body": " The difference between 'weak' and 'strong' induction  'Regular'\/'weak' induction follows the pattern:  Basis step.  Inductive hypothesis is is true  We show that implies that is true  That is, we use this induction process for claims where it's convenient to show that the pattern follows sequentially in a convenient way. Straight-forward examples are the addition formulas;  'Strong' induction follows the pattern:  Basis step(s). [may need more than one basis, just like some recurrence relations]  Inductive hypothesis is that all of are true. [this is the 'strong' part; it's a larger assumption]  We show that the hypothesis implies the next element in the sequence, , is true [like before]  the difference between this and the previous induction process is that it's sometimes not convenient to prove that directly connects to . Instead, we still need to show that the next element in the sequence is true by appealing to a previous element in the sequence.  Relevant examples are those like the binary representation of a number - that has a binary representation doesn't immediately tell us does, but if we can cut the number in half and use the binary representation of that number to scale-up in order to build a binary representation of .  "
},
{
  "id": "exercise-137",
  "level": "2",
  "url": "sec_logic_induction.html#exercise-137",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " Use induction to prove for all that .    We must prove that for all . Thus let be the statement . We will prove that is true for all . First we establish the base case, , which claims that . Since , we see that is true. Now for the inductive case. Assume that is true for an arbitrary . That is, . We must show that is true (i.e., that ). To do this, we start with the left-hand side of and work to the right-hand side:   Thus is true so by the principle of mathematical induction, is true for all .   "
},
{
  "id": "exercise-sum-of-odds",
  "level": "2",
  "url": "sec_logic_induction.html#exercise-sum-of-odds",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " Prove that for all .    Let be the statement . We will prove that is true for all . First the base case, . We have which is true, so is established. Now the inductive case. Assume that is true for some fixed arbitrary . That is, . We will now prove that is also true (i.e., that ). We start with the left-hand side of and work to the right-hand side:   Thus holds, so by the principle of mathematical induction, is true for all .   "
},
{
  "id": "exercise-139",
  "level": "2",
  "url": "sec_logic_induction.html#exercise-139",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": " Prove that for all . (Recall, .)    Let be the statement . We will show is true for all . First, we check the base case and see that yes, (as ) so is true. Now for the inductive case. Assume is true for an arbitrary . That is, . Now consider : . To prove this, we start with the left side and work to the right side.   Therefore so we have established . Thus by the principle of mathematical induction is true for all .   "
},
{
  "id": "exercise-140",
  "level": "2",
  "url": "sec_logic_induction.html#exercise-140",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": " Prove that the sum of squares can be found as follows     Let be the statement . For the base case, we show that is true. That is: which is true.  For the inductive step, assume that is true for some integer , that is and consider the statement: which is exactly what we needed to show. Thus, by the principle of mathematical induction, the original statement is true for all integers .   "
},
{
  "id": "exercise-141",
  "level": "2",
  "url": "sec_logic_induction.html#exercise-141",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": " What is wrong with the following proof of the fact that for all values of (besides of course that the thing it is claiming to prove is false)?   Let be the statement that . We will prove that is true for all . Assume, for induction that is true. That is, . We must show that is true. Now since , add 1 to both sides. This gives . Regrouping . But this is simply . Thus by the principle of mathematical induction is true for all .    The only problem is that we never established the base case. Of course, when , .  "
},
{
  "id": "exercise-142",
  "level": "2",
  "url": "sec_logic_induction.html#exercise-142",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": " The proof in the previous problem does not work. But if we modify the fact, we can get a working proof. Prove that for all values of . You can do this proof with algebra (without induction), but the goal of this exercise is to write out a valid induction proof.    Let be the statement that . We will prove that is true for all . First, note that the base case holds: . Now assume for induction that is true. That is, . We must show that is true. Now since , add 1 to both sides. This gives . Regrouping . But this is simply . Thus by the principle of mathematical induction is true for all .   "
},
{
  "id": "exercise-143",
  "level": "2",
  "url": "sec_logic_induction.html#exercise-143",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": " Find the flaw in the following proof of the fact that for every .   Let be the statement . We will prove is true for all . First we establish the base case: when , is true, because . Now for the inductive step, assume is true. That is, . Now if , then is some number, like 80. Of course which is still less than 100. So as well. But this is what claims, so we have shown that . Thus by the principle of mathematical induction, is true for all .    The problem here is that while is true, and while for some values of , there is at least one value of (namely ) when that implication fails. For a valid proof by induction, must be true for all values of greater than or equal to the base case.  "
},
{
  "id": "exercise-144",
  "level": "2",
  "url": "sec_logic_induction.html#exercise-144",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": " What is wrong with the following proof of the fact that for all , the number is odd?   Let be the statement is odd. We will prove that is true for all . Suppose for induction that is true, that is, that is odd. Now consider the statement . Now . By the inductive hypothesis, is odd, and of course is even. An odd plus an even is always odd, so therefore is odd. Therefore by the principle of mathematical induction, is true for all .    Rather than give a solution, here's just a hint. What happens if is even?  "
},
{
  "id": "exercise-145",
  "level": "2",
  "url": "sec_logic_induction.html#exercise-145",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": " Now give a valid proof (by induction, even though you might be able to do so without using induction) of the statement, for all , the number is even.     Let be the statement is even.   Basis step: when we have which is a even.  Inductive step: Assume that is true for some integer , that is, is even, and let's consider the following: now for some integer by inductive hypothesis, so we have: and thus is even.  Therefore, by math induction, is even for all natural numbers .  "
},
{
  "id": "exercise-146",
  "level": "2",
  "url": "sec_logic_induction.html#exercise-146",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": " Use induction to prove that if people all shake hands with each other, that the total number of handshakes is .    Let be the statement when people shake hands with each other, there are a total of handshakes.   Base case: When , there will be one handshake, and . Thus is true.  Inductive case: Assume is true for arbitrary (that the number of handshakes among people is . What happens if a st person shows up? How many new handshakes take place? The new person must shake hands with everyone there, which is new handshakes. So the total is now , as needed.  Therefore, by the principle of mathematical induction, is true for all .   "
},
{
  "id": "exercise-147",
  "level": "2",
  "url": "sec_logic_induction.html#exercise-147",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": " Use the product rule for logarithms ( ) to prove, by induction on , that , for all natural numbers .   The idea here is that if we take the logarithm of , we can increase by 1 if we multiply by another (inside the logarithm). This results in adding 1 more to the total.   Let be the statement . The base case, is true, because , by the product rule for logarithms. Now assume, for induction, that is true. That is, . Consider . We have with the last equality due to the inductive hypothesis. But this simplifies to , establishing . Therefore by the principle of mathematical induction, is true for all .   "
},
{
  "id": "exercise-148",
  "level": "2",
  "url": "sec_logic_induction.html#exercise-148",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": " Let be differentiable functions. Prove, using induction, that   You may assume for any differentiable functions and . (You don't actually need to know calculus to be able to do this).   You are allowed to assume the base case. For the inductive case, group all but the last function together as one sum of functions, then apply the usual sum of derivatives rule, and then the inductive hypothesis.  "
},
{
  "id": "exercise-149",
  "level": "2",
  "url": "sec_logic_induction.html#exercise-149",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": " Recall that is the th Fibonacci number defined in .  Prove, by mathematical induction, that .    Let be the statement .   Basis step: if then while so the basis step is true.  Inductive step: Assume that is true for some integer . That is, . Now consider thus is true.  Therefore, by math induction, for all natural numbers.   "
},
{
  "id": "fibonacci-sum-of-evens",
  "level": "2",
  "url": "sec_logic_induction.html#fibonacci-sum-of-evens",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": " Prove that where is the th Fibonacci number.    Let be the statement . We will show that is true for all . First the base case is easy because and so . Now consider the inductive case. Assume is true, that is, assume . To establish we work from left to right:   Therefore , which is to say holds. Therefore by the principle of mathematical induction, is true for all .   "
},
{
  "id": "exercise-151",
  "level": "2",
  "url": "sec_logic_induction.html#exercise-151",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": " Prove, using strong induction, that every natural number is either a Fibonacci number or can be written as the sum of distinct Fibonacci numbers.    Let be the statement that is either a Fibonacci number of the sum of distinct Fibonacci numbers  Basis step: For , we have that is a Fibonacci number.  Inductive step: Assume that there is an integer such that is true for all . That is, is either a Fibonacci number or the sum of distinct Fibonacci numbers. Now let's consider the next number, :  Case 1: If is a Fibonacci number, then we're done.  Case 2: If is not a Fibonacci number, then let be the largest Fibonacci number less than . Since then we have that is the sum of distinct Fibonacci numbers, by inductive hypothesis.  Adding to this sum gives us which then itself a sum of distinct Fibonacci numbers.  Thus, by induction, every natural number is either a Fibonacci number of the sum of distinct Fibonacci numbers.   "
},
{
  "id": "fibonacci-sum-of-odds",
  "level": "2",
  "url": "sec_logic_induction.html#fibonacci-sum-of-odds",
  "type": "Exercise",
  "number": "16",
  "title": "",
  "body": " Prove, by mathematical induction, that , where is the th Fibonacci number.    Let be the statement   Basis step: If then and so that is true.  Inductive step: Assume that is true for some integer . That is, and consider: And thus is true.  Therefore, by math induction, for all integers .   "
},
{
  "id": "fibonacci-sum_of_squares",
  "level": "2",
  "url": "sec_logic_induction.html#fibonacci-sum_of_squares",
  "type": "Exercise",
  "number": "17",
  "title": "",
  "body": " Prove, by mathematical induction, that , where is the th Fibonacci number.      "
},
{
  "id": "exercise-154",
  "level": "2",
  "url": "sec_logic_induction.html#exercise-154",
  "type": "Exercise",
  "number": "18",
  "title": "",
  "body": " Prove that there is a strictly increasing sequence of numbers (not necessarily integers) such that for all . (By strictly increasing we mean for all . So each term must be larger than the last.)    Let be the statement there is a strictly increasing sequence with . We will prove is true for all . First we establish the base case: says there is a single number with . This is true take . Now for the inductive step, assume is true. That is there exists a strictly increasing sequence with . Now consider this sequence, plus one more term, which is greater than but less than . Such a number exists, for example, the average between and 100. So then is true, so we have shown that . Thus by the principle of mathematical induction, is true for all .   "
},
{
  "id": "exercise-155",
  "level": "2",
  "url": "sec_logic_induction.html#exercise-155",
  "type": "Exercise",
  "number": "19",
  "title": "",
  "body": " Prove that 6 divides for all .   (Alternative idea to the below proof) In the inductive step add and subtract . That is, you'll have . Now algebra.    Let be the statement 6 divides . We will show is true for all . First we establish the base case, . Since , and is a multiple of 6, is true. Now for the inductive case. Assume holds for an arbitrary . That is, 6 divides , or in other words, for some integer . Now consider :   Therefore 6 divides , or in other words, is true. Therefore by the principle of mathematical induction, is true for all .   "
},
{
  "id": "section-counting-basics",
  "level": "1",
  "url": "section-counting-basics.html",
  "type": "Section",
  "number": "5.1",
  "title": "The Multiplicative and Additive Principles",
  "body": " The Multiplicative and Additive Principles   In this section we begin our quest to start answering a question that sounds simple enough: how many elements are in a set? Counting the number of sets is common enough that we gave it its own symbol, , in . Numbers of elements in the domain and codomain of functions determine whether a function is bijective, as we saw in an exercise in the functions section   We start with basic counting rules that help us count and for sets .        It's common to count hands of cards, so we'll note that a standard deck of playing cards contains four suits (spade, heart, club, diamond). There are 13 cards in each suit (2,3,4,5,6,7,8,9,10, Jack, Queen, King, Ace). Face cards refers to jacks, queens, and kings. Spades and clubs are black and hearts and diamonds are red.   Our first principle counts :   Multiplication Principle   The multiplication principle states that if an event can occur ways and an event can occur ways, then the event can occur ways.  The multiplication principle generalizes to more than two events.      If in your closet you have five ironic t-shirts, three pairs of pants, and three collegiate hats, how many different outfits do you have? Here an outfit is pants, shirt, hat.         How many six character license plates can there be if the first three characters are letters and the second three characters are numbers?         How many playing cards in a standard deck are both red and face cards?       Our second principle (almost) counts ; we need to be disjoint sets.   Addition Principle   The addition principle states that if event can occur ways and event can occur ways and the two events are disjoint, then the event (but not both) can occur ways.      If in your closet you have five ironic t-shirts, three pairs of pants, and three collegiate hats, how many different items do you have in your closet?        Counting principles in terms of sets:   Let be two sets. Then:    .    If , then        In order to count , regardless of how the two sets intersect, we introduce the following:   The Principle of Inclusion-Exclusion   If are two sets, then   Note that this is like the additive principle, except we're removing the occurrences that are in common between and .    It helps, when working counting problems with unions, even if using the principle of inclusion-exclusion, to draw a Venn diagram and label the number of elements in each section.    Suppose a company receives 350 applications from college graduates for a job. Suppose 220 of these applicants majored in computer science, 147 majored in business, and 51 majored in both computer science and business. How many majored in neither computer science nor business?         We will now consider bit strings which are strings of characters containing only and . For example, these are bit strings: etc.  How many bit strings of length eight either start with a 1 bit or end with two bits 00?         There are 30 people in a club. Assuming everyone is qualified to serve in any position, how many different ways are there to assign a president, vice-president, secretary, and treasurer?       The Principle of Inclusion-Exclusion applies to more than two sets. For any finite sets , In fact, we could generalize it further, but I'll leave that to you to write the formula if you're interested.    Suppose we surveyed a class of 41 students, asking if they could play an Accordion, a Bassoon, or a Clarinet. 12 could play the clarinet, 8 could play bassoon, and 5 the accordion. 6 played clarinet and bassoon, 2 played clarinet and accordion, and 3 played bassoon and accordion. One student played all three.  How many students can play at least one instrument? Solve this first by Venn Diagrams, then by PIE.                                                 Our next counting approach is pretty straight forward. If you have three cookies, but only two plates, you know that one person is eaching at least two cookies.   If they're chocolate chip, I might be eating all three cookies. But that still means that I had at least two cookies.    The Pigeonhole Principle   If is a positive integer and objects are placed into boxes, then at least one box has two or more objects.    I'll pause here to note that a pigeonhole is a slot on a desk or shelf for holding papers. In our scenario, if we have five slots in our desk to hold our papers, and six papers, one slot has at least two papers.      If there are 13 people, at least two of them have the same birth month.  If there are 10 cars at a restaurant, but 11 people there, then at least two people car pooled.  etc...       The Generalized Pigeonhole Principal   If objects are placed into boxes, then there is at least one box with .    Let's imagine there are 100 people in a large lecture hall, then we know that at least at least have the same birth month. Divide the number of people by the number of months, and round up.    How many cards must be selected from a standard deck of 52 cards in order that at least three have the same suit?       According to the Generalized Pigeonhole Principle, we want to determine the number of cards, , that must be drawn (here suits): So .        Your wardrobe consists of 5 shirts, 3 pairs of pants, and 17 bow ties bow ties . How many different outfits can you make?   There are 255 outfits. Use the multiplicative principle.     For your college interview, you must wear a tie. You own 3 regular (boring) ties and 5 (cool) bow ties.  How many choices do you have for your neck-wear?   You realize that the interview is for clown college, so you should probably wear both a regular tie and a bow tie. How many choices do you have now?    For the rest of your outfit, you have 5 shirts, 4 skirts, 3 pants, and 7 dresses. You want to select either a shirt to wear with a skirt or pants, or just a dress. How many outfits do you have to choose from?         8 ties. Use the additive principle.   15 ties. Use the multiplicative principle   outfits.       Your Blu-ray collection consists of 9 comedies and 7 horror movies. Give an example of a question for which the answer is:   16.    63.         For example, 16 is the number of choices you have if you want to watch one movie, either a comedy or horror flick.    For example, 63 is the number of choices you have if you will watch two movies, first a comedy and then a horror.                                      Suppose you have sets and with and .  What is the largest possible value for ?  What is the smallest possible value for ? What are the possible values for ?       To maximize the number of elements in common between and , make . This would give .  and might have no elements in common, giving .   . In fact, when then and when then .       If and , what is ?    . Use PIE: we know .     In a recent survey, 30 students reported whether they liked their potatoes Mashed, French-fried, or Twice-baked. 15 liked them mashed, 20 liked French fries, and 9 liked twice baked potatoes. Additionally, 12 students liked both mashed and fried potatoes, 5 liked French fries and twice baked potatoes, 6 liked mashed and baked, and 3 liked all three styles. How many students hate potatoes? Explain why your answer is correct.     For how many is a multiple of one or more of 5, 6, or 7?   To find out how many numbers are divisible by 6 and 7, for example, take and round down.     Let , , and be sets.  Find provided , , , , , , and .  Describe a set in terms of , , and with cardinality 26.       Consider all 5 letter words made from the letters through . (Recall, words are just strings of letters, not necessarily actual English words.)   How many of these words are there total?    How many of these words contain no repeated letters?    How many of these words start with the sub-word aha ?    How many of these words either start with aha or end with bah or both?    How many of the words containing no repeats also do not contain the sub-word bad ?        words, since you select from 8 letters 5 times.  words. After selecting a letter, you have fewer letters to select for the next one.    words: you need to select the 4th and 5th letters.   words. There are 64 words which start with aha and another 64 words that end with bah. Perhaps we over counted the words that both start with aha and end with bah , but since the words are only 5 letters long, there are no such words.  words. All the words minus the bad ones. The taboo word can be in any of three positions (starting with letter 1, 2, or 3) and for each position we must choose the other two letters (from the remaining 5 letters).       For how many three digit numbers (100 to 999) is the sum of the digits even? (For example, has an even sum of digits: which is even.) Find the answer and explain why it is correct in at least two different ways.    Suppose a drawer has a dozen brown socks and a dozen black socks (all thrown together).  How many socks must be taken out at random to guarantee a match (of any color)?  How many socks must be taken out at random to guarantee at least two are black socks?       3 socks. Honestly, if you don't care about color, this is an argument for never folding socks.  14. I could have grabbed 12 brown socks in a row, so in this worst-case scenario, two black socks are the last I picked.      If there are 38 different time periods during which classes can be scheduled, and there are 677 different classes, how many rooms are required?    rooms.    Assuming that no one has more than 1,000,000 hairs on their head and that the population of New York City was 8,008,278 in 2010, what is the least number of people in NYC in 2010 with the same number of hairs on their heads?    Suppose that are five different integers. Must some pair of them differ by a multiple of four?   There are a total of four different remainders modulo 4. According to the Generalized Pigeonhole Principal, if we have 5 numbers divided among four different remainders, of them have to have the same remainder. Thus they differ by a multiple of four.    "
},
{
  "id": "note-20",
  "level": "2",
  "url": "section-counting-basics.html#note-20",
  "type": "Note",
  "number": "5.1.1",
  "title": "",
  "body": " It's common to count hands of cards, so we'll note that a standard deck of playing cards contains four suits (spade, heart, club, diamond). There are 13 cards in each suit (2,3,4,5,6,7,8,9,10, Jack, Queen, King, Ace). Face cards refers to jacks, queens, and kings. Spades and clubs are black and hearts and diamonds are red.  "
},
{
  "id": "definition-60",
  "level": "2",
  "url": "section-counting-basics.html#definition-60",
  "type": "Definition",
  "number": "5.1.2",
  "title": "Multiplication Principle.",
  "body": " Multiplication Principle   The multiplication principle states that if an event can occur ways and an event can occur ways, then the event can occur ways.  The multiplication principle generalizes to more than two events.   "
},
{
  "id": "example-ironic-outfits",
  "level": "2",
  "url": "section-counting-basics.html#example-ironic-outfits",
  "type": "Example",
  "number": "5.1.3",
  "title": "",
  "body": "  If in your closet you have five ironic t-shirts, three pairs of pants, and three collegiate hats, how many different outfits do you have? Here an outfit is pants, shirt, hat.      "
},
{
  "id": "example-123",
  "level": "2",
  "url": "section-counting-basics.html#example-123",
  "type": "Example",
  "number": "5.1.4",
  "title": "",
  "body": "  How many six character license plates can there be if the first three characters are letters and the second three characters are numbers?      "
},
{
  "id": "example-124",
  "level": "2",
  "url": "section-counting-basics.html#example-124",
  "type": "Example",
  "number": "5.1.5",
  "title": "",
  "body": "  How many playing cards in a standard deck are both red and face cards?      "
},
{
  "id": "definition-61",
  "level": "2",
  "url": "section-counting-basics.html#definition-61",
  "type": "Definition",
  "number": "5.1.6",
  "title": "Addition Principle.",
  "body": " Addition Principle   The addition principle states that if event can occur ways and event can occur ways and the two events are disjoint, then the event (but not both) can occur ways.   "
},
{
  "id": "example-125",
  "level": "2",
  "url": "section-counting-basics.html#example-125",
  "type": "Example",
  "number": "5.1.7",
  "title": "",
  "body": "  If in your closet you have five ironic t-shirts, three pairs of pants, and three collegiate hats, how many different items do you have in your closet?      "
},
{
  "id": "definition-62",
  "level": "2",
  "url": "section-counting-basics.html#definition-62",
  "type": "Definition",
  "number": "5.1.8",
  "title": "Counting principles in terms of sets:.",
  "body": " Counting principles in terms of sets:   Let be two sets. Then:    .    If , then       "
},
{
  "id": "definition-63",
  "level": "2",
  "url": "section-counting-basics.html#definition-63",
  "type": "Definition",
  "number": "5.1.9",
  "title": "The Principle of Inclusion-Exclusion.",
  "body": " The Principle of Inclusion-Exclusion   If are two sets, then   Note that this is like the additive principle, except we're removing the occurrences that are in common between and .   "
},
{
  "id": "example-126",
  "level": "2",
  "url": "section-counting-basics.html#example-126",
  "type": "Example",
  "number": "5.1.10",
  "title": "",
  "body": "  Suppose a company receives 350 applications from college graduates for a job. Suppose 220 of these applicants majored in computer science, 147 majored in business, and 51 majored in both computer science and business. How many majored in neither computer science nor business?      "
},
{
  "id": "example-127",
  "level": "2",
  "url": "section-counting-basics.html#example-127",
  "type": "Example",
  "number": "5.1.11",
  "title": "",
  "body": "  We will now consider bit strings which are strings of characters containing only and . For example, these are bit strings: etc.  How many bit strings of length eight either start with a 1 bit or end with two bits 00?      "
},
{
  "id": "example-128",
  "level": "2",
  "url": "section-counting-basics.html#example-128",
  "type": "Example",
  "number": "5.1.12",
  "title": "",
  "body": "  There are 30 people in a club. Assuming everyone is qualified to serve in any position, how many different ways are there to assign a president, vice-president, secretary, and treasurer?      "
},
{
  "id": "example-129",
  "level": "2",
  "url": "section-counting-basics.html#example-129",
  "type": "Example",
  "number": "5.1.13",
  "title": "",
  "body": "  Suppose we surveyed a class of 41 students, asking if they could play an Accordion, a Bassoon, or a Clarinet. 12 could play the clarinet, 8 could play bassoon, and 5 the accordion. 6 played clarinet and bassoon, 2 played clarinet and accordion, and 3 played bassoon and accordion. One student played all three.  How many students can play at least one instrument? Solve this first by Venn Diagrams, then by PIE.      "
},
{
  "id": "definition-64",
  "level": "2",
  "url": "section-counting-basics.html#definition-64",
  "type": "Definition",
  "number": "5.1.14",
  "title": "The Pigeonhole Principle.",
  "body": " The Pigeonhole Principle   If is a positive integer and objects are placed into boxes, then at least one box has two or more objects.   "
},
{
  "id": "example-130",
  "level": "2",
  "url": "section-counting-basics.html#example-130",
  "type": "Example",
  "number": "5.1.15",
  "title": "",
  "body": "    If there are 13 people, at least two of them have the same birth month.  If there are 10 cars at a restaurant, but 11 people there, then at least two people car pooled.  etc...     "
},
{
  "id": "theorem-9",
  "level": "2",
  "url": "section-counting-basics.html#theorem-9",
  "type": "Theorem",
  "number": "5.1.16",
  "title": "The Generalized Pigeonhole Principal.",
  "body": " The Generalized Pigeonhole Principal   If objects are placed into boxes, then there is at least one box with .   "
},
{
  "id": "example-131",
  "level": "2",
  "url": "section-counting-basics.html#example-131",
  "type": "Example",
  "number": "5.1.17",
  "title": "",
  "body": "  How many cards must be selected from a standard deck of 52 cards in order that at least three have the same suit?       According to the Generalized Pigeonhole Principle, we want to determine the number of cards, , that must be drawn (here suits): So .   "
},
{
  "id": "exercise-156",
  "level": "2",
  "url": "section-counting-basics.html#exercise-156",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " Your wardrobe consists of 5 shirts, 3 pairs of pants, and 17 bow ties bow ties . How many different outfits can you make?   There are 255 outfits. Use the multiplicative principle.  "
},
{
  "id": "exercise-157",
  "level": "2",
  "url": "section-counting-basics.html#exercise-157",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " For your college interview, you must wear a tie. You own 3 regular (boring) ties and 5 (cool) bow ties.  How many choices do you have for your neck-wear?   You realize that the interview is for clown college, so you should probably wear both a regular tie and a bow tie. How many choices do you have now?    For the rest of your outfit, you have 5 shirts, 4 skirts, 3 pants, and 7 dresses. You want to select either a shirt to wear with a skirt or pants, or just a dress. How many outfits do you have to choose from?         8 ties. Use the additive principle.   15 ties. Use the multiplicative principle   outfits.    "
},
{
  "id": "exercise-158",
  "level": "2",
  "url": "section-counting-basics.html#exercise-158",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": " Your Blu-ray collection consists of 9 comedies and 7 horror movies. Give an example of a question for which the answer is:   16.    63.         For example, 16 is the number of choices you have if you want to watch one movie, either a comedy or horror flick.    For example, 63 is the number of choices you have if you will watch two movies, first a comedy and then a horror.     "
},
{
  "id": "exercise-159",
  "level": "2",
  "url": "section-counting-basics.html#exercise-159",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": " Suppose you have sets and with and .  What is the largest possible value for ?  What is the smallest possible value for ? What are the possible values for ?       To maximize the number of elements in common between and , make . This would give .  and might have no elements in common, giving .   . In fact, when then and when then .    "
},
{
  "id": "exercise-160",
  "level": "2",
  "url": "section-counting-basics.html#exercise-160",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": " If and , what is ?    . Use PIE: we know .  "
},
{
  "id": "exercise-161",
  "level": "2",
  "url": "section-counting-basics.html#exercise-161",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": " In a recent survey, 30 students reported whether they liked their potatoes Mashed, French-fried, or Twice-baked. 15 liked them mashed, 20 liked French fries, and 9 liked twice baked potatoes. Additionally, 12 students liked both mashed and fried potatoes, 5 liked French fries and twice baked potatoes, 6 liked mashed and baked, and 3 liked all three styles. How many students hate potatoes? Explain why your answer is correct.  "
},
{
  "id": "exercise-162",
  "level": "2",
  "url": "section-counting-basics.html#exercise-162",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": " For how many is a multiple of one or more of 5, 6, or 7?   To find out how many numbers are divisible by 6 and 7, for example, take and round down.  "
},
{
  "id": "exercise-163",
  "level": "2",
  "url": "section-counting-basics.html#exercise-163",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": " Let , , and be sets.  Find provided , , , , , , and .  Describe a set in terms of , , and with cardinality 26.    "
},
{
  "id": "exercise-164",
  "level": "2",
  "url": "section-counting-basics.html#exercise-164",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": " Consider all 5 letter words made from the letters through . (Recall, words are just strings of letters, not necessarily actual English words.)   How many of these words are there total?    How many of these words contain no repeated letters?    How many of these words start with the sub-word aha ?    How many of these words either start with aha or end with bah or both?    How many of the words containing no repeats also do not contain the sub-word bad ?        words, since you select from 8 letters 5 times.  words. After selecting a letter, you have fewer letters to select for the next one.    words: you need to select the 4th and 5th letters.   words. There are 64 words which start with aha and another 64 words that end with bah. Perhaps we over counted the words that both start with aha and end with bah , but since the words are only 5 letters long, there are no such words.  words. All the words minus the bad ones. The taboo word can be in any of three positions (starting with letter 1, 2, or 3) and for each position we must choose the other two letters (from the remaining 5 letters).    "
},
{
  "id": "exercise-165",
  "level": "2",
  "url": "section-counting-basics.html#exercise-165",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": " For how many three digit numbers (100 to 999) is the sum of the digits even? (For example, has an even sum of digits: which is even.) Find the answer and explain why it is correct in at least two different ways.  "
},
{
  "id": "exercise-166",
  "level": "2",
  "url": "section-counting-basics.html#exercise-166",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": " Suppose a drawer has a dozen brown socks and a dozen black socks (all thrown together).  How many socks must be taken out at random to guarantee a match (of any color)?  How many socks must be taken out at random to guarantee at least two are black socks?       3 socks. Honestly, if you don't care about color, this is an argument for never folding socks.  14. I could have grabbed 12 brown socks in a row, so in this worst-case scenario, two black socks are the last I picked.    "
},
{
  "id": "exercise-167",
  "level": "2",
  "url": "section-counting-basics.html#exercise-167",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": " If there are 38 different time periods during which classes can be scheduled, and there are 677 different classes, how many rooms are required?    rooms.  "
},
{
  "id": "exercise-168",
  "level": "2",
  "url": "section-counting-basics.html#exercise-168",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": " Assuming that no one has more than 1,000,000 hairs on their head and that the population of New York City was 8,008,278 in 2010, what is the least number of people in NYC in 2010 with the same number of hairs on their heads?  "
},
{
  "id": "exercise-169",
  "level": "2",
  "url": "section-counting-basics.html#exercise-169",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": " Suppose that are five different integers. Must some pair of them differ by a multiple of four?   There are a total of four different remainders modulo 4. According to the Generalized Pigeonhole Principal, if we have 5 numbers divided among four different remainders, of them have to have the same remainder. Thus they differ by a multiple of four.  "
},
{
  "id": "section-counting-combperm",
  "level": "1",
  "url": "section-counting-combperm.html",
  "type": "Section",
  "number": "5.2",
  "title": "Permutations and Combinations",
  "body": " Permutations and Combinations   In the previous section, we were counting things that essentially occurred once. For example, we picked one outfit (one shirt, one pair of pants, one hat). In this section we'll add complexity. Instead of picking an outfit for a day, how many different ways can our bag be packed for a weekend trip? We'll answer it at the end of the section.       Permutation   A permutation is an ordered arrangement of objects.      If I want to arrange five books on a shelf, how many possible arrangements of the books are there?       Intuitively, the permutation of the five books is just the multiplication principle. There are five choices for the first, four for the second, ... until there's only one choice. We found it was .    How many functions are bijections?         If I only want to arrange three of the five books on my shelf, how many ways are there to do that?       This is still just the multiplication principle. There are five choices for the first, four for the second, but this time three choices for the third is our last book we take. Here we found it was . But this suggests a pattern that is established in the following theorem and its useful corollary.    If is a positive integer and is an integer such that , then there are  -permutations of a set of elements.      If and are integers with , then:       How many six-letter vanity license plates are there that have no repeated letters?         How many functions are injective? [Recall a function is injective ]       Permutations count those situations in which order matters, such as arranging books on a shelf. If the order of items doesn't matter, we need to account for it as a combination.   Combination   A combination is an unordered selection of objects.      If I want only to select three books from my five books on the bookshelf, in how many ways can I do this?       One way we can think about solving this previous example is that we solved the permutation question, but then we divided out the possible orderings. We started with , and divide by , the number of ways to arrange the objects. This gives us a very convenient formula:   If are integers such that , then the number of -combinations from a set of elements is    A word on notation  Other texts sometimes write to be consistent with permutation notation, and TI calculators often have an button. These all mean the same thing. We're using the binomial notation because of a connection we'll make in the next section.      How many ways are there to choose five out of ten friends to invite over for dinner?         Two of your ten friends, Tim and Tammy just broke up. They can't stand to be in a room together. How many ways are there to choose five out of ten friends to invite to dinner, ensuring that Tim and Tammy are not both invited?         How many three element subsets from a set of five elements are there?         From a standard deck of 52 cards, how many five card hands are possible?         How many five card cards have exactly the same suit?         How many five card hands have at least one heart?         Coming back to our packing for the weekend scenario from the introduction, let's say, like in , that our closet has five ironic t-shirts, three pairs of pants, and three collegiate hats. We want to pack for our weekend trip, picking out three shirts, two pants, and two hats for our suitcase. How many ways can we do this?    Just like when I pack, I'll take one topic at a time:  Picking shirts -- there are shirts I'm picking from 5, so Although the shirts are all different, the order I put them into the suitcase doesn't matter, so it's a combination.  Picking my pants -- there are shirts I'm picking from 3, so .  Picking my hat -- there are hats I'm picking from 3, so also.  In total, then, since the shirts, pants, and hats are all independent of one another, we multiply the results to find there are: there are So there are ninety different ways to pack for the weekend.   ... no wonder packing can seem stressful!         A pizza parlor offers 10 toppings.   How many 3-topping pizzas could they put on their menu? Assume double toppings are not allowed.    How many total pizzas are possible, with between zero and ten toppings (but not double toppings) allowed?    The pizza parlor will list the 10 toppings in two equal-sized columns on their menu. How many ways can they arrange the toppings in the left column?        pizzas. We must choose (in no particular order) 3 out of the 10 toppings.  pizzas. Say yes or no to each topping.  ways. Assign each of the 5 spots in the left column to a unique pizza topping.       A combination lock consists of a dial with 40 numbers on it. To open the lock, you turn the dial to the right until you reach a first number, then to the left until you get to second number, then to the right again to the third number. The numbers must be distinct. How many different combinations are possible?   Despite its name, we are not looking for a combination here. The order in which the three numbers appears matters. There are different possibilities for the combination . This is assuming you cannot repeat any of the numbers (if you could, the answer would be ).                   An anagram of a word is just a rearrangement of its letters. How many different anagrams of uncopyrightable are there? (This happens to be the longest common English word without any repeated letters.)     How many anagrams are there of the word assesses that start with the letter a ?   After the first letter (a), we must rearrange the remaining 7 letters. There are only two letters (s and e), so this is really just a bit-string question (think of s as 1 and e as 0). Thus there anagrams starting with a .     How many anagrams are there of anagram ?     On a business retreat, your company of 20 businessmen and businesswomen go golfing.   You need to divide up into foursomes (groups of 4 people): a first foursome, a second foursome, and so on. How many ways can you do this?    After all your hard work, you realize that in fact, you want each foursome to include one of the five Board members. How many ways can you do this?        ways. Pick 4 out of 20 people to be in the first foursome, then 4 of the remaining 16 for the second foursome, and so on (use the multiplicative principle to combine).  ways. First determine the tee time of the 5 board members, then select 3 of the 15 non board members to golf with the first board member, then 3 of the remaining 12 to golf with the second, and so on.       Consider sets and with and .   How many functions are there?    How many functions are injective?        functions. There are 17 choices for the image of each element in the domain.  injective functions. There are 17 choices for image of the first element of the domain, then only 16 choices for the second, and so on.                                                 "
},
{
  "id": "definition-65",
  "level": "2",
  "url": "section-counting-combperm.html#definition-65",
  "type": "Definition",
  "number": "5.2.1",
  "title": "Permutation.",
  "body": " Permutation   A permutation is an ordered arrangement of objects.   "
},
{
  "id": "example-132",
  "level": "2",
  "url": "section-counting-combperm.html#example-132",
  "type": "Example",
  "number": "5.2.2",
  "title": "",
  "body": "  If I want to arrange five books on a shelf, how many possible arrangements of the books are there?      "
},
{
  "id": "example-133",
  "level": "2",
  "url": "section-counting-combperm.html#example-133",
  "type": "Example",
  "number": "5.2.3",
  "title": "",
  "body": "  How many functions are bijections?      "
},
{
  "id": "example-134",
  "level": "2",
  "url": "section-counting-combperm.html#example-134",
  "type": "Example",
  "number": "5.2.4",
  "title": "",
  "body": "  If I only want to arrange three of the five books on my shelf, how many ways are there to do that?      "
},
{
  "id": "theorem-10",
  "level": "2",
  "url": "section-counting-combperm.html#theorem-10",
  "type": "Theorem",
  "number": "5.2.5",
  "title": "",
  "body": "  If is a positive integer and is an integer such that , then there are  -permutations of a set of elements.   "
},
{
  "id": "corollary-2",
  "level": "2",
  "url": "section-counting-combperm.html#corollary-2",
  "type": "Corollary",
  "number": "5.2.6",
  "title": "",
  "body": "  If and are integers with , then:    "
},
{
  "id": "example-135",
  "level": "2",
  "url": "section-counting-combperm.html#example-135",
  "type": "Example",
  "number": "5.2.7",
  "title": "",
  "body": "  How many six-letter vanity license plates are there that have no repeated letters?      "
},
{
  "id": "example-136",
  "level": "2",
  "url": "section-counting-combperm.html#example-136",
  "type": "Example",
  "number": "5.2.8",
  "title": "",
  "body": "  How many functions are injective? [Recall a function is injective ]      "
},
{
  "id": "definition-66",
  "level": "2",
  "url": "section-counting-combperm.html#definition-66",
  "type": "Definition",
  "number": "5.2.9",
  "title": "Combination.",
  "body": " Combination   A combination is an unordered selection of objects.   "
},
{
  "id": "example-137",
  "level": "2",
  "url": "section-counting-combperm.html#example-137",
  "type": "Example",
  "number": "5.2.10",
  "title": "",
  "body": "  If I want only to select three books from my five books on the bookshelf, in how many ways can I do this?      "
},
{
  "id": "note-21",
  "level": "2",
  "url": "section-counting-combperm.html#note-21",
  "type": "Note",
  "number": "5.2.11",
  "title": "",
  "body": " If are integers such that , then the number of -combinations from a set of elements is    A word on notation  Other texts sometimes write to be consistent with permutation notation, and TI calculators often have an button. These all mean the same thing. We're using the binomial notation because of a connection we'll make in the next section.   "
},
{
  "id": "example-138",
  "level": "2",
  "url": "section-counting-combperm.html#example-138",
  "type": "Example",
  "number": "5.2.12",
  "title": "",
  "body": "  How many ways are there to choose five out of ten friends to invite over for dinner?      "
},
{
  "id": "example-139",
  "level": "2",
  "url": "section-counting-combperm.html#example-139",
  "type": "Example",
  "number": "5.2.13",
  "title": "",
  "body": "  Two of your ten friends, Tim and Tammy just broke up. They can't stand to be in a room together. How many ways are there to choose five out of ten friends to invite to dinner, ensuring that Tim and Tammy are not both invited?      "
},
{
  "id": "example-140",
  "level": "2",
  "url": "section-counting-combperm.html#example-140",
  "type": "Example",
  "number": "5.2.14",
  "title": "",
  "body": "  How many three element subsets from a set of five elements are there?      "
},
{
  "id": "example-141",
  "level": "2",
  "url": "section-counting-combperm.html#example-141",
  "type": "Example",
  "number": "5.2.15",
  "title": "",
  "body": "  From a standard deck of 52 cards, how many five card hands are possible?      "
},
{
  "id": "example-142",
  "level": "2",
  "url": "section-counting-combperm.html#example-142",
  "type": "Example",
  "number": "5.2.16",
  "title": "",
  "body": "  How many five card cards have exactly the same suit?      "
},
{
  "id": "example-143",
  "level": "2",
  "url": "section-counting-combperm.html#example-143",
  "type": "Example",
  "number": "5.2.17",
  "title": "",
  "body": "  How many five card hands have at least one heart?      "
},
{
  "id": "example-144",
  "level": "2",
  "url": "section-counting-combperm.html#example-144",
  "type": "Example",
  "number": "5.2.18",
  "title": "",
  "body": "  Coming back to our packing for the weekend scenario from the introduction, let's say, like in , that our closet has five ironic t-shirts, three pairs of pants, and three collegiate hats. We want to pack for our weekend trip, picking out three shirts, two pants, and two hats for our suitcase. How many ways can we do this?    Just like when I pack, I'll take one topic at a time:  Picking shirts -- there are shirts I'm picking from 5, so Although the shirts are all different, the order I put them into the suitcase doesn't matter, so it's a combination.  Picking my pants -- there are shirts I'm picking from 3, so .  Picking my hat -- there are hats I'm picking from 3, so also.  In total, then, since the shirts, pants, and hats are all independent of one another, we multiply the results to find there are: there are So there are ninety different ways to pack for the weekend.   ... no wonder packing can seem stressful!    "
},
{
  "id": "exercise-170",
  "level": "2",
  "url": "section-counting-combperm.html#exercise-170",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " A pizza parlor offers 10 toppings.   How many 3-topping pizzas could they put on their menu? Assume double toppings are not allowed.    How many total pizzas are possible, with between zero and ten toppings (but not double toppings) allowed?    The pizza parlor will list the 10 toppings in two equal-sized columns on their menu. How many ways can they arrange the toppings in the left column?        pizzas. We must choose (in no particular order) 3 out of the 10 toppings.  pizzas. Say yes or no to each topping.  ways. Assign each of the 5 spots in the left column to a unique pizza topping.    "
},
{
  "id": "exercise-171",
  "level": "2",
  "url": "section-counting-combperm.html#exercise-171",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " A combination lock consists of a dial with 40 numbers on it. To open the lock, you turn the dial to the right until you reach a first number, then to the left until you get to second number, then to the right again to the third number. The numbers must be distinct. How many different combinations are possible?   Despite its name, we are not looking for a combination here. The order in which the three numbers appears matters. There are different possibilities for the combination . This is assuming you cannot repeat any of the numbers (if you could, the answer would be ).  "
},
{
  "id": "exercise-172",
  "level": "2",
  "url": "section-counting-combperm.html#exercise-172",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": " An anagram of a word is just a rearrangement of its letters. How many different anagrams of uncopyrightable are there? (This happens to be the longest common English word without any repeated letters.)  "
},
{
  "id": "exercise-173",
  "level": "2",
  "url": "section-counting-combperm.html#exercise-173",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": " How many anagrams are there of the word assesses that start with the letter a ?   After the first letter (a), we must rearrange the remaining 7 letters. There are only two letters (s and e), so this is really just a bit-string question (think of s as 1 and e as 0). Thus there anagrams starting with a .  "
},
{
  "id": "exercise-174",
  "level": "2",
  "url": "section-counting-combperm.html#exercise-174",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": " How many anagrams are there of anagram ?  "
},
{
  "id": "exercise-175",
  "level": "2",
  "url": "section-counting-combperm.html#exercise-175",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": " On a business retreat, your company of 20 businessmen and businesswomen go golfing.   You need to divide up into foursomes (groups of 4 people): a first foursome, a second foursome, and so on. How many ways can you do this?    After all your hard work, you realize that in fact, you want each foursome to include one of the five Board members. How many ways can you do this?        ways. Pick 4 out of 20 people to be in the first foursome, then 4 of the remaining 16 for the second foursome, and so on (use the multiplicative principle to combine).  ways. First determine the tee time of the 5 board members, then select 3 of the 15 non board members to golf with the first board member, then 3 of the remaining 12 to golf with the second, and so on.    "
},
{
  "id": "exercise-176",
  "level": "2",
  "url": "section-counting-combperm.html#exercise-176",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": " Consider sets and with and .   How many functions are there?    How many functions are injective?        functions. There are 17 choices for the image of each element in the domain.  injective functions. There are 17 choices for image of the first element of the domain, then only 16 choices for the second, and so on.    "
},
{
  "id": "section-counting-binomial",
  "level": "1",
  "url": "section-counting-binomial.html",
  "type": "Section",
  "number": "5.3",
  "title": "Combinatorial Proofs",
  "body": " Combinatorial Proofs   We're going to begin this section by doing a lot of tedious looking algebra, but then we'll make a connection to what we've been doing. There's a reason! Later in the section, we will introduce a new method of proof called, combinatorial proof in which we're able to verify mathematical statements by counting!    Binomial Coefficients  As promised, we begin with some tedious calculations. Let's start by expanding each of the following binomials:      ...  If we arrange the coefficients of the binomials (binomial coefficients) in a triangle, we can find many really neat patterns. In the West, this is usually called Pascal's Triangle after Blaise Pascal (1600's), though it was also discussed by the Chinese author Yang Hui (1200's) and it's called Yang Hui's triangle in China.   Neither Yang Hui nor Blaise Pascal invented it, but their works were popular and we settled on naming it after them.    Pascal's triangle. Numbers are arranged in rows in the shape of a triangle. The top number is 1. Next row is 1 and 1; next row is 1, 2, 1; next is 1, 3, 3, 1; and it continues. Each entry is found by adding the two entries above it: e.g. 3=1+2    There are lots of patterns hidden away in the triangle! Take a few minutes to look for some. Here are just a few to notice:   The entries on the left or right side of the triangle are all 1.    Any entry not on the border is the sum of the two entries above it.    The triangle is symmetric. In any row, entries on the left side are mirrored on the right side.    The sum of all entries on a given row is a power of 2.     A connection that Pascal did make in Traité du triangle arithmétique (Treatise on the Arithmetic Triangle) is that the entries in the table are actually combinations! Here's the triangle again, but written with combinations And rather than going through further linguistic torture, we can now refer to combinations as binomial coefficients .   Pascal's triangle re-written with combinations. Numbers are arranged in rows in the shape of a triangle. The top number is (0 choose 0). Next row is (1 choose 0) and (1 choose 1); Each entry is the (row choose column)    Now that we've connected the coefficients of the binomial to combinations, we can now write the formal binomial theorem as its often presented:   The Binomial Theorem   Let be variables and a natural number, then         I'm a big Sherlock Holmes fan, so I want to acknowledge that (fictional) Professor James Moriaraty proved significant results about the binomial theorem. He of course didn't (because he's not real), but also Isaac Newton and Jakob Bernoulli did it about 150 years before Moriarty would be born.  ... this was a really long way of saying I'm a nerd.   Take a moment to compare the binomials we expanded in the beginning of the section with the summation in the Binomial Theorem to see how it all fits together.  We can also return to the patterns we saw in the triangle and rewrite them in terms of binomial coefficients.   The entries on the left or right side of the triangle are all 1. In symbols, we'll write:     Any entry not on the border is the sum of the two entries above it. In symbols:     The triangle is symmetric. In any row, entries on the left side are mirrored on the right side. In symbols:     The sum of all entries on a given row is a power of 2. In symbols:      Our goal for the remainder of the section is to give proofs of binomial identities. We'll start with a very tedious algebraic way to do it and then introduce a new proof technique to deal with the same identity.    Give an algebraic proof for the binomial identity      By the definition of , we have and   Thus, starting with the right-hand side of the equation:   The second line (where the common denominator is found) works because and .     That algebra had some fun manipulations if you're into that kind of thing, but as 15th century mathematician Gerolamo Cardano said Ars Magna , it is as refined as it is useless.    Cardano was actually talking about square roots of negative numbers, what we now call complex numbers. He probably wouldn't be impressed with me misquoting him. But he wasn't a very nice person, so I don't care. I do love to talk about him, though, ask me about him sometime! (Have I reminded you about my math history class lately?)     Combinatorial Proofs  Here we introduce a new method of providing mathematical statements. Our goal is to show that an equality is true by counting each side of the equation differently, but showing that we've counted the same objects. In order to do this, we will make the following connection for things that binomial coefficients might represent:   is the number of ways to select objects from a set of objects.   is the number subsets of size from a set of size    is the number of bit strings of length with exactly 1's   is the coefficient of in the expansion of   there are many more ways of viewing binomial coefficients.    For a combinatorial proof, we will follow this approach:  Determine a question that can be answered by the particular equation.  Answer the question in two different ways  Because those answers count the same object, we can equate their solutions.  Coming up with the question is often the hardest part.    Give a combinatarial proof of the identity: by viewing the binomial coefficients as counting subsets.       We begin by asking a question, and answering the question in two ways:   How many subsets of size are there from a set of size ?   Answer one: There are such subsets.  Answer two: Pick any element of the set. That element is either included in a subset, or it is not.  How many subsets contain this element? We will be picking from the remaining elements. Since we want the subsets to have elements, but we already have one of them, we have a total of such subsets.  How many subsets do not contain this element? We will be picking from the remaining elements. Since we want the subsets to have elements, we have such subsets.  Thus there are subsets of elements from a set of elements.  Because each answer counted the same objects, but in two different ways, those answers much be the same. Thus     Some people find combinatorial proofs more fun because they tell a story. In this next example, if we used a formula, we'd write . Fine. But we could also see that this could actually be talking about cookies!    Give a combinatorial proof of .    How about we ask how many ways can we take no cookies from a bag of cookies?    Question: How many ways can we take no cookies from a bag of cookies?  Answer: This is , since that's what binomial coefficients count.  Answer: There is exactly one way to do this. We just don't get a cookie.  Because each answer answers the same question, we have shown that .      Give a combinatorial proof of     Sticking with the cookie scenario, how many ways to pick cookies from cookies?    Question: How many ways can we take cookies from a bag of cookies?  Answer: There are ways to do this, since this is what binomial coefficients count.  Answer: Instead of picking the cookies we want, let's pick the cookies we don't want . We will pick the cookies that we don't want, and there's ways to do this.  Because these both answer the same question, we have that .      Prove the binomial identity     How many pizzas of toppings can be made if we can choose from toppings?    Note that in the video, I start with a different form of the equation but quickly change it to this one. It's equivalent.     For this one, I'm going to rewrite the equation, taking advantage of the symmetry property we proved in . We start with: and this is what we'll use to prove the identity.  Question: If there are meats and non-meat toppings for a pizza, how many topping pizzas can be made? (if we don't allow repeat toppings)  Answer: There are total pizzas that can be made.   Answer: We'll split on how many meats we want:   If we want no meats, then we'll select no meats and non-meats. These are independent of one another, so we multiply:     If we want 1 meat, then we'll select non-meats for the rest of the toppings. These are independent of one another, so we multiply:     If we want 2 meats, then we'll select non-meats for the rest of the toppings. These are independent of one another, so we multiply:    ...   If we want n meats, then we'll select non-meats for the rest of the toppings. These are independent of one another, so we multiply:    because each of these pizzas are completely different than the rest (have different numbers of meats), the addition principle says to add them all together:    Because each answer was a different way to count the same objects, we find that        Prove .   Here are two different ways to go about it:  Combinatorial proof: Answer the question If a pizza place offers toppings, how many pizzas can you build using any number of toppings using each topping no more than once?   Or, use the binomial theorem and set appropriate values of .      Give a combinatorial proof of the identity .    Question: How many 2-letter words start with a , b , or c and end with either y or z ?  Answer 1: There are two words that start with a , two that start with b , two that start with c , for a total of .  Answer 2: There are three choices for the first letter and two choices for the second letter, for a total of .  Since the two answers are both answers to the same question, they are equal. Thus .     Give a combinatorial proof for the identity .    Question: How many subsets of contain exactly two elements?  Answer 1: We must choose 2 elements from choices, so there are subsets.  Answer 2: We break this question down into cases, based on what the larger of the two elements in the subset is. The larger element can't be 1, since we need at least one element smaller than it.  Larger element is 2: there is 1 choice for the smaller element.  Larger element is 3: there are 2 choices for the smaller element.  Larger element is 4: there are 3 choices for the smaller element.  And so on. When the larger element is , there are choices for the smaller element. Since each two element subset must be in exactly one of these cases, the total number of two element subsets is .  Answer 1 and answer 2 are both correct answers to the same question, so they must be equal. Therefore,      A woman is getting married. She has 15 best friends but can only select 6 of them to be her bridesmaids, one of which needs to be her maid of honor. How many ways can she do this?    What if she first selects the 6 bridesmaids, and then selects one of them to be the maid of honor?    What if she first selects her maid of honor, and then 5 other bridesmaids?    Explain why .        She has ways to select the 6 bridesmaids, and then for each way, has 6 choices for the maid of honor. Thus she has choices.    She has 15 choices for who will be her maid of honor. Then she needs to select 5 of the remaining 14 friends to be bridesmaids, which she can do in ways. Thus she has choices.    We have answered the question (how many wedding parties can the bride choose from) in two ways. The first way gives the left-hand side of the identity and the second way gives the right-hand side of the identity. Therefore the identity holds.       Give a combinatorial proof of the identity .    Question: You have a large container filled with ping-pong balls, all with a different number on them. You must select of the balls, putting two of them in a jar and the others in a box. How many ways can you do this?  Answer 1: First select 2 of the balls to put in the jar. Then select of the remaining balls to put in the box. The first task can be completed in different ways, the second task in ways. Thus there are ways to select the balls.  Answer 2: First select balls from the in the container. Then pick 2 of the balls you picked to put in the jar, placing the remaining in the box. The first task can be completed in ways, the second task in ways. Thus there are ways to select the balls.  Since both answers count the same thing, they must be equal and the identity is established.     How many ways are there to rearrange the letters in the word rearrange ? Answer this question in at least two different ways to establish a binomial identity.   The word contains 9 letters: 3 r s, 2 a s and 2 e s, along with an n and a g . We could first select the positions for the r s in ways, then the a s in ways, the e s in ways and then select one of the remaining two spots to put the n (placing the g in the last spot). This gives the answer   Alternatively, we could select the positions of the letters in the opposite order, which would give an answer   (where the 3 r s go in the remaining 3 spots). These two expressions are equal:      Give a combinatorial proof of the identity     Give a combinatorial proof for the identity     Question: How many -letter words can you make using different letters without repeating any letter?  Answer 1: There are choices for the first letter, choices for the second letter, choices for the third letter, and so on until choices for the th letter (since letters have already been assigned at that point). The product of these numbers can be written which is . Therefore there are words.  Answer 2: First pick letters to be in the word from the choices. This can be done in ways. Now arrange those letters into a word. There are choices for the first letter, choices for the second, and so on, for a total of arrangements of the letters. Thus the total number of words is .  Since the two answers are correct answers to the same question, we have established that .     Establish the identity below using a combinatorial proof.     Question: How many 5-element subsets are there of the set .  Answer 1: We choose 5 out of the elements, so subsets.  Answer 2: Break this up into cases by what the middle (third smallest) element of the 5 element subset is. The smallest this could be is a 3. In that case, we have choices for the numbers below it, and choices for the numbers above it. Alternatively, the middle number could be a 4. In this case there are choices for the bottom two numbers and choices for the top two numbers. If the middle number is 5, then there are choices for the bottom two numbers and choices for the top two numbers. An so on, all the way up to the largest the middle number could be, which is . In that case there are choices for the bottom two numbers and choices for the top number. Thus the number of 5 element subsets is   Since the two answers correctly answer the same question, we have      In each polynomial below, assume is some variable. Use the binomial theorem to expand and reduce modulo the appropriate number:     Prove that for any prime .   Here's a partial solution:      What can be said about each each binomial coefficient except the first and the last? Why?    "
},
{
  "id": "p-1365",
  "level": "2",
  "url": "section-counting-binomial.html#p-1365",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "binomial coefficients "
},
{
  "id": "theorem-11",
  "level": "2",
  "url": "section-counting-binomial.html#theorem-11",
  "type": "Theorem",
  "number": "5.3.1",
  "title": "The Binomial Theorem.",
  "body": " The Binomial Theorem   Let be variables and a natural number, then       "
},
{
  "id": "example-145",
  "level": "2",
  "url": "section-counting-binomial.html#example-145",
  "type": "Example",
  "number": "5.3.2",
  "title": "",
  "body": "  Give an algebraic proof for the binomial identity      By the definition of , we have and   Thus, starting with the right-hand side of the equation:   The second line (where the common denominator is found) works because and .    "
},
{
  "id": "example-146",
  "level": "2",
  "url": "section-counting-binomial.html#example-146",
  "type": "Example",
  "number": "5.3.3",
  "title": "",
  "body": "  Give a combinatarial proof of the identity: by viewing the binomial coefficients as counting subsets.       We begin by asking a question, and answering the question in two ways:   How many subsets of size are there from a set of size ?   Answer one: There are such subsets.  Answer two: Pick any element of the set. That element is either included in a subset, or it is not.  How many subsets contain this element? We will be picking from the remaining elements. Since we want the subsets to have elements, but we already have one of them, we have a total of such subsets.  How many subsets do not contain this element? We will be picking from the remaining elements. Since we want the subsets to have elements, we have such subsets.  Thus there are subsets of elements from a set of elements.  Because each answer counted the same objects, but in two different ways, those answers much be the same. Thus    "
},
{
  "id": "example-147",
  "level": "2",
  "url": "section-counting-binomial.html#example-147",
  "type": "Example",
  "number": "5.3.4",
  "title": "",
  "body": "  Give a combinatorial proof of .    How about we ask how many ways can we take no cookies from a bag of cookies?    Question: How many ways can we take no cookies from a bag of cookies?  Answer: This is , since that's what binomial coefficients count.  Answer: There is exactly one way to do this. We just don't get a cookie.  Because each answer answers the same question, we have shown that .   "
},
{
  "id": "example-symmetry-property",
  "level": "2",
  "url": "section-counting-binomial.html#example-symmetry-property",
  "type": "Example",
  "number": "5.3.5",
  "title": "",
  "body": "  Give a combinatorial proof of     Sticking with the cookie scenario, how many ways to pick cookies from cookies?    Question: How many ways can we take cookies from a bag of cookies?  Answer: There are ways to do this, since this is what binomial coefficients count.  Answer: Instead of picking the cookies we want, let's pick the cookies we don't want . We will pick the cookies that we don't want, and there's ways to do this.  Because these both answer the same question, we have that .   "
},
{
  "id": "example-149",
  "level": "2",
  "url": "section-counting-binomial.html#example-149",
  "type": "Example",
  "number": "5.3.6",
  "title": "",
  "body": "  Prove the binomial identity     How many pizzas of toppings can be made if we can choose from toppings?    Note that in the video, I start with a different form of the equation but quickly change it to this one. It's equivalent.     For this one, I'm going to rewrite the equation, taking advantage of the symmetry property we proved in . We start with: and this is what we'll use to prove the identity.  Question: If there are meats and non-meat toppings for a pizza, how many topping pizzas can be made? (if we don't allow repeat toppings)  Answer: There are total pizzas that can be made.   Answer: We'll split on how many meats we want:   If we want no meats, then we'll select no meats and non-meats. These are independent of one another, so we multiply:     If we want 1 meat, then we'll select non-meats for the rest of the toppings. These are independent of one another, so we multiply:     If we want 2 meats, then we'll select non-meats for the rest of the toppings. These are independent of one another, so we multiply:    ...   If we want n meats, then we'll select non-meats for the rest of the toppings. These are independent of one another, so we multiply:    because each of these pizzas are completely different than the rest (have different numbers of meats), the addition principle says to add them all together:    Because each answer was a different way to count the same objects, we find that    "
},
{
  "id": "exercise-177",
  "level": "2",
  "url": "section-counting-binomial.html#exercise-177",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " Prove .   Here are two different ways to go about it:  Combinatorial proof: Answer the question If a pizza place offers toppings, how many pizzas can you build using any number of toppings using each topping no more than once?   Or, use the binomial theorem and set appropriate values of .    "
},
{
  "id": "exercise-178",
  "level": "2",
  "url": "section-counting-binomial.html#exercise-178",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " Give a combinatorial proof of the identity .    Question: How many 2-letter words start with a , b , or c and end with either y or z ?  Answer 1: There are two words that start with a , two that start with b , two that start with c , for a total of .  Answer 2: There are three choices for the first letter and two choices for the second letter, for a total of .  Since the two answers are both answers to the same question, they are equal. Thus .   "
},
{
  "id": "exercise-179",
  "level": "2",
  "url": "section-counting-binomial.html#exercise-179",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": " Give a combinatorial proof for the identity .    Question: How many subsets of contain exactly two elements?  Answer 1: We must choose 2 elements from choices, so there are subsets.  Answer 2: We break this question down into cases, based on what the larger of the two elements in the subset is. The larger element can't be 1, since we need at least one element smaller than it.  Larger element is 2: there is 1 choice for the smaller element.  Larger element is 3: there are 2 choices for the smaller element.  Larger element is 4: there are 3 choices for the smaller element.  And so on. When the larger element is , there are choices for the smaller element. Since each two element subset must be in exactly one of these cases, the total number of two element subsets is .  Answer 1 and answer 2 are both correct answers to the same question, so they must be equal. Therefore,    "
},
{
  "id": "exercise-180",
  "level": "2",
  "url": "section-counting-binomial.html#exercise-180",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": " A woman is getting married. She has 15 best friends but can only select 6 of them to be her bridesmaids, one of which needs to be her maid of honor. How many ways can she do this?    What if she first selects the 6 bridesmaids, and then selects one of them to be the maid of honor?    What if she first selects her maid of honor, and then 5 other bridesmaids?    Explain why .        She has ways to select the 6 bridesmaids, and then for each way, has 6 choices for the maid of honor. Thus she has choices.    She has 15 choices for who will be her maid of honor. Then she needs to select 5 of the remaining 14 friends to be bridesmaids, which she can do in ways. Thus she has choices.    We have answered the question (how many wedding parties can the bride choose from) in two ways. The first way gives the left-hand side of the identity and the second way gives the right-hand side of the identity. Therefore the identity holds.     "
},
{
  "id": "exercise-181",
  "level": "2",
  "url": "section-counting-binomial.html#exercise-181",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": " Give a combinatorial proof of the identity .    Question: You have a large container filled with ping-pong balls, all with a different number on them. You must select of the balls, putting two of them in a jar and the others in a box. How many ways can you do this?  Answer 1: First select 2 of the balls to put in the jar. Then select of the remaining balls to put in the box. The first task can be completed in different ways, the second task in ways. Thus there are ways to select the balls.  Answer 2: First select balls from the in the container. Then pick 2 of the balls you picked to put in the jar, placing the remaining in the box. The first task can be completed in ways, the second task in ways. Thus there are ways to select the balls.  Since both answers count the same thing, they must be equal and the identity is established.   "
},
{
  "id": "exercise-182",
  "level": "2",
  "url": "section-counting-binomial.html#exercise-182",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": " How many ways are there to rearrange the letters in the word rearrange ? Answer this question in at least two different ways to establish a binomial identity.   The word contains 9 letters: 3 r s, 2 a s and 2 e s, along with an n and a g . We could first select the positions for the r s in ways, then the a s in ways, the e s in ways and then select one of the remaining two spots to put the n (placing the g in the last spot). This gives the answer   Alternatively, we could select the positions of the letters in the opposite order, which would give an answer   (where the 3 r s go in the remaining 3 spots). These two expressions are equal:   "
},
{
  "id": "exercise-183",
  "level": "2",
  "url": "section-counting-binomial.html#exercise-183",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": " Give a combinatorial proof of the identity   "
},
{
  "id": "exercise-184",
  "level": "2",
  "url": "section-counting-binomial.html#exercise-184",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": " Give a combinatorial proof for the identity     Question: How many -letter words can you make using different letters without repeating any letter?  Answer 1: There are choices for the first letter, choices for the second letter, choices for the third letter, and so on until choices for the th letter (since letters have already been assigned at that point). The product of these numbers can be written which is . Therefore there are words.  Answer 2: First pick letters to be in the word from the choices. This can be done in ways. Now arrange those letters into a word. There are choices for the first letter, choices for the second, and so on, for a total of arrangements of the letters. Thus the total number of words is .  Since the two answers are correct answers to the same question, we have established that .   "
},
{
  "id": "exercise-185",
  "level": "2",
  "url": "section-counting-binomial.html#exercise-185",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": " Establish the identity below using a combinatorial proof.     Question: How many 5-element subsets are there of the set .  Answer 1: We choose 5 out of the elements, so subsets.  Answer 2: Break this up into cases by what the middle (third smallest) element of the 5 element subset is. The smallest this could be is a 3. In that case, we have choices for the numbers below it, and choices for the numbers above it. Alternatively, the middle number could be a 4. In this case there are choices for the bottom two numbers and choices for the top two numbers. If the middle number is 5, then there are choices for the bottom two numbers and choices for the top two numbers. An so on, all the way up to the largest the middle number could be, which is . In that case there are choices for the bottom two numbers and choices for the top number. Thus the number of 5 element subsets is   Since the two answers correctly answer the same question, we have    "
},
{
  "id": "exercise-186",
  "level": "2",
  "url": "section-counting-binomial.html#exercise-186",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": " In each polynomial below, assume is some variable. Use the binomial theorem to expand and reduce modulo the appropriate number:     Prove that for any prime .   Here's a partial solution:      What can be said about each each binomial coefficient except the first and the last? Why?  "
},
{
  "id": "section-counting-fib",
  "level": "1",
  "url": "section-counting-fib.html",
  "type": "Section",
  "number": "5.4",
  "title": "Counting Fibonacci numbers with tiles",
  "body": " Counting Fibonacci numbers with tiles      Let's imagine that you have a rectangular grid of blank spaces. How many ways can you tile that grid using either square tiles or two-square-wide dominoes?  We will define an -board to be a rectangular grid of spaces.  For example, here are all of the possible tilings for a 4-board. We can do it using four squares, one domino followed by two squares, one square one domino and one square, two squares followed by a domino, or two dominoes In total there are five ways to do this:   Tilings of a 4-board: four squares, one domino followed by two squares, one square one domino and one square, two squares followed by a domino, or two dominoes    To tile a 3-board, it's necessarily fewer. We can do it with three squares, one square and a domino, or one domino followed by a square. In total there are three ways to do it:   Tilings of a 3-board: 3sq; 1dom, 1sq; 1sq, 1dom      In how many ways can you tile a 5-board?    Start by observing that a 5-board is just a 4-board with one extra space. How many ways are there to tile this? There are 5 ways to tile a 4-board and all we're doing is adding an extra square. That means this configuration is the same as the number of ways to tile a 4-board, which we found above to be 5, multiplied by the 1 way to add a square: .  But a 5-board is also a 3-board with an extra two spaces at the end. How many ways can we tile this? This is the same as the number of ways to tile a 3-board because we just add a domino at the end. If we added a square, it would no longer be a 3-board, it'd become a 4-board we counted above. Therefore we take the number of ways to tile a 3-board, multiplied by the 1 way to add a domino:   These two subdivisions are mutually exclusive (if we added a square to the 3-board, that's turned it into the 4-board, which was already counted above). So we can conclude the number of ways to tile a 5-board is 5+3 = 8.   Tiling a 5-board: The 5-board is a 4-board with square plus a 3-board plus domino      Observe that the number of ways to tile the board is defined recursively in terms of the two previous boards. In fact, since there's only one way to a tile a 1-board and 1 ways to tile a 0-board (you don't tile it at all), we can observe that the tilings follow a very familiar recursion:    Let denote the number of tilings for an -board. Then (there is one way to tile a 0 board), and , and for      In an -board, there are ways to tile the first tiles followed by one square, and there are to tile the first tiles, followed by a domino. These tilings are disjoint events, and thus .      Let by the th Fibonacci number. Then (where we'll make the notational convention that so our indices can match).    The number of ways to tile an -board is a Fibonacci number! This means that anything we did with Fibonacci numbers can now be considered as tiling questions. Let's put this to use to verify some Fibonacci identities using combinatorial proof. When we write condition on we mean to consider breaking the board at tile and count the separate pieces.     For .    Question: How many tilings of an -board use at least one domino? Condition on the location of the last domino.          For .    Condition on the location of the last square.    We say that a tiling of an -board is breakable at cell , if the tiling can be decomposed into two tilings, one covering cells 1 through , the other through . It is said to be unbreakable at otherwise.     For .    Condition on the breakability at cell .          For : .  Note that we'll define if . This is reasonable since, for example, if you want to choose 3 objects from a set of 1 object, there are no ways to do it: i.e. .    Condition on the number of dominoes.    Question: How many tilings of an -board exist?   Answer 1: There are tilings.  Answer 2: Condition on the number of dominoes. If there are no dominoes, then from cells, we have 0 choices for where to put the domino: . For 1 domino, we will be using a total of squares and domino which will span the remaining two locations. That means that we are using a total of tiles, and so we have possibilities.  For the case where we are using dominoes, with , we will be using squares, or a total of tiles. To choose where to place the dominoes, we'll have ways to do this.  Thus, for , there are a total of tilings of an board. Since both answers count the same object, we conclude that .        Prove that using a combinatorial argument.   Condition on the location of the last square.     Prove that using a combinatorial argument.   Condition on the breakability of the st space.    "
},
{
  "id": "p-1455",
  "level": "2",
  "url": "section-counting-fib.html#p-1455",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "-board "
},
{
  "id": "example-150",
  "level": "2",
  "url": "section-counting-fib.html#example-150",
  "type": "Example",
  "number": "5.4.1",
  "title": "",
  "body": "  In how many ways can you tile a 5-board?    Start by observing that a 5-board is just a 4-board with one extra space. How many ways are there to tile this? There are 5 ways to tile a 4-board and all we're doing is adding an extra square. That means this configuration is the same as the number of ways to tile a 4-board, which we found above to be 5, multiplied by the 1 way to add a square: .  But a 5-board is also a 3-board with an extra two spaces at the end. How many ways can we tile this? This is the same as the number of ways to tile a 3-board because we just add a domino at the end. If we added a square, it would no longer be a 3-board, it'd become a 4-board we counted above. Therefore we take the number of ways to tile a 3-board, multiplied by the 1 way to add a domino:   These two subdivisions are mutually exclusive (if we added a square to the 3-board, that's turned it into the 4-board, which was already counted above). So we can conclude the number of ways to tile a 5-board is 5+3 = 8.   Tiling a 5-board: The 5-board is a 4-board with square plus a 3-board plus domino     "
},
{
  "id": "theorem-12",
  "level": "2",
  "url": "section-counting-fib.html#theorem-12",
  "type": "Theorem",
  "number": "5.4.2",
  "title": "",
  "body": "  Let denote the number of tilings for an -board. Then (there is one way to tile a 0 board), and , and for      In an -board, there are ways to tile the first tiles followed by one square, and there are to tile the first tiles, followed by a domino. These tilings are disjoint events, and thus .   "
},
{
  "id": "corollary-3",
  "level": "2",
  "url": "section-counting-fib.html#corollary-3",
  "type": "Corollary",
  "number": "5.4.3",
  "title": "",
  "body": "  Let by the th Fibonacci number. Then (where we'll make the notational convention that so our indices can match).   "
},
{
  "id": "p-1466",
  "level": "2",
  "url": "section-counting-fib.html#p-1466",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "condition on "
},
{
  "id": "example-151",
  "level": "2",
  "url": "section-counting-fib.html#example-151",
  "type": "Example",
  "number": "5.4.4",
  "title": "",
  "body": "  For .    Question: How many tilings of an -board use at least one domino? Condition on the location of the last domino.      "
},
{
  "id": "example-152",
  "level": "2",
  "url": "section-counting-fib.html#example-152",
  "type": "Example",
  "number": "5.4.5",
  "title": "",
  "body": "  For .    Condition on the location of the last square.   "
},
{
  "id": "p-1471",
  "level": "2",
  "url": "section-counting-fib.html#p-1471",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "breakable at cell unbreakable at "
},
{
  "id": "example-153",
  "level": "2",
  "url": "section-counting-fib.html#example-153",
  "type": "Example",
  "number": "5.4.6",
  "title": "",
  "body": "  For .    Condition on the breakability at cell .      "
},
{
  "id": "example-154",
  "level": "2",
  "url": "section-counting-fib.html#example-154",
  "type": "Example",
  "number": "5.4.7",
  "title": "",
  "body": "  For : .  Note that we'll define if . This is reasonable since, for example, if you want to choose 3 objects from a set of 1 object, there are no ways to do it: i.e. .    Condition on the number of dominoes.    Question: How many tilings of an -board exist?   Answer 1: There are tilings.  Answer 2: Condition on the number of dominoes. If there are no dominoes, then from cells, we have 0 choices for where to put the domino: . For 1 domino, we will be using a total of squares and domino which will span the remaining two locations. That means that we are using a total of tiles, and so we have possibilities.  For the case where we are using dominoes, with , we will be using squares, or a total of tiles. To choose where to place the dominoes, we'll have ways to do this.  Thus, for , there are a total of tilings of an board. Since both answers count the same object, we conclude that .   "
},
{
  "id": "exercise-187",
  "level": "2",
  "url": "section-counting-fib.html#exercise-187",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " Prove that using a combinatorial argument.   Condition on the location of the last square.  "
},
{
  "id": "exercise-188",
  "level": "2",
  "url": "section-counting-fib.html#exercise-188",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " Prove that using a combinatorial argument.   Condition on the breakability of the st space.  "
},
{
  "id": "solutions-1",
  "level": "1",
  "url": "solutions-1.html",
  "type": "Appendix",
  "number": "A",
  "title": "Solutions to the exercises",
  "body": " Solutions to the exercises  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
