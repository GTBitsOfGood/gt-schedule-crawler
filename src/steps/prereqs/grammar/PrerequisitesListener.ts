// Generated from src/steps/prereqs/grammar/Prerequisites.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ParseContext } from "./PrerequisitesParser";
import { ExpressionContext } from "./PrerequisitesParser";
import { TermContext } from "./PrerequisitesParser";
import { AtomContext } from "./PrerequisitesParser";
import { CourseContext } from "./PrerequisitesParser";
import { SubjectContext } from "./PrerequisitesParser";
import { NumberContext } from "./PrerequisitesParser";
import { GradeContext } from "./PrerequisitesParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `PrerequisitesParser`.
 */
export interface PrerequisitesListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `PrerequisitesParser.parse`.
	 * @param ctx the parse tree
	 */
	enterParse?: (ctx: ParseContext) => void;
	/**
	 * Exit a parse tree produced by `PrerequisitesParser.parse`.
	 * @param ctx the parse tree
	 */
	exitParse?: (ctx: ParseContext) => void;

	/**
	 * Enter a parse tree produced by `PrerequisitesParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `PrerequisitesParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `PrerequisitesParser.term`.
	 * @param ctx the parse tree
	 */
	enterTerm?: (ctx: TermContext) => void;
	/**
	 * Exit a parse tree produced by `PrerequisitesParser.term`.
	 * @param ctx the parse tree
	 */
	exitTerm?: (ctx: TermContext) => void;

	/**
	 * Enter a parse tree produced by `PrerequisitesParser.atom`.
	 * @param ctx the parse tree
	 */
	enterAtom?: (ctx: AtomContext) => void;
	/**
	 * Exit a parse tree produced by `PrerequisitesParser.atom`.
	 * @param ctx the parse tree
	 */
	exitAtom?: (ctx: AtomContext) => void;

	/**
	 * Enter a parse tree produced by `PrerequisitesParser.course`.
	 * @param ctx the parse tree
	 */
	enterCourse?: (ctx: CourseContext) => void;
	/**
	 * Exit a parse tree produced by `PrerequisitesParser.course`.
	 * @param ctx the parse tree
	 */
	exitCourse?: (ctx: CourseContext) => void;

	/**
	 * Enter a parse tree produced by `PrerequisitesParser.subject`.
	 * @param ctx the parse tree
	 */
	enterSubject?: (ctx: SubjectContext) => void;
	/**
	 * Exit a parse tree produced by `PrerequisitesParser.subject`.
	 * @param ctx the parse tree
	 */
	exitSubject?: (ctx: SubjectContext) => void;

	/**
	 * Enter a parse tree produced by `PrerequisitesParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `PrerequisitesParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by `PrerequisitesParser.grade`.
	 * @param ctx the parse tree
	 */
	enterGrade?: (ctx: GradeContext) => void;
	/**
	 * Exit a parse tree produced by `PrerequisitesParser.grade`.
	 * @param ctx the parse tree
	 */
	exitGrade?: (ctx: GradeContext) => void;
}

