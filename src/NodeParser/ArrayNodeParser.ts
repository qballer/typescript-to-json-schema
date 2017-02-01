import * as ts from "typescript";
import { NodeParser, Context } from "../NodeParser";
import { SubNodeParser } from "../SubNodeParser";
import { BaseType } from "../Type/BaseType";
import { ArrayType } from "../Type/ArrayType";

export class ArrayNodeParser implements SubNodeParser {
    public constructor(
        private typeChecker: ts.TypeChecker,
        private childNodeParser: NodeParser,
    ) {
    }

    public supportsNode(node: ts.ArrayTypeNode): boolean {
        return node.kind === ts.SyntaxKind.ArrayType;
    }
    public createType(node: ts.ArrayTypeNode, context: Context): BaseType {
        return new ArrayType(
            this.childNodeParser.createType(node.elementType, context),
        );
    }
}
