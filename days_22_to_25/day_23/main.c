#include <stdio.h>
#include <stdlib.h>
#define INSTRUCTIONS_SIZE 100
#define ARG_SIZE 10

enum operation { cpy, inc, dec, jnz, tgl };
enum argtype { regtype, valtype };

struct arg {
    enum argtype type;
    union argval {
        char reg;
        int val;
    } val;
};

struct instruction {
    enum operation op;
    struct arg args[2];
    int nargs;
};

void parse_arg(struct arg *arg, char *raw) {
    if ('a' <= *raw && *raw <= 'd') {
        arg->type = regtype;
        arg->val.reg = *raw - 'a';
    } else {
        arg->type = valtype;
        arg->val.val = atoi(raw);
    }
}

int parse(struct instruction *instruction) {
    int n = 0;
    char arg0[ARG_SIZE], arg1[ARG_SIZE];
    while (n < INSTRUCTIONS_SIZE) {
        if (scanf("cpy %s %s\n", arg0, arg1) == 2) {
            instruction->op = cpy;
            parse_arg(&instruction->args[0], arg0);
            parse_arg(&instruction->args[1], arg1);
            instruction->nargs = 2;
            n++, instruction++;
            continue;
        }
        if (scanf("jnz %s %s\n", arg0, arg1) == 2) {
            instruction->op = jnz;
            parse_arg(&instruction->args[0], arg0);
            parse_arg(&instruction->args[1], arg1);
            instruction->nargs = 2;
            n++, instruction++;
            continue;
        }
        if (scanf("inc %s\n", arg0) == 1) {
            instruction->op = inc;
            parse_arg(&instruction->args[0], arg0);
            instruction->nargs = 1;
            n++, instruction++;
            continue;
        }
        if (scanf("dec %s\n", arg0) == 1) {
            instruction->op = dec;
            parse_arg(&instruction->args[0], arg0);
            instruction->nargs = 1;
            n++, instruction++;
            continue;
        }
        if (scanf("tgl %s\n", arg0) == 1) {
            instruction->op = tgl;
            parse_arg(&instruction->args[0], arg0);
            instruction->nargs = 1;
            n++, instruction++;
            continue;
        }
        return n;
    }
}

int read_arg(struct arg *a, int regs[]) {
    if (a->type == valtype) {
        return a->val.val;
    }
    return regs[a->val.reg];
}

void toggle(struct instruction *in) {
    if (in->op == inc) {
        in->op = dec;
    } else if (in->op == dec || in->op == tgl) {
        in->op = inc;
    } else if (in->op == jnz) {
        in->op = cpy;
    } else if (in->op == cpy) {
        in->op = jnz;
    } else {
        printf("unsupported op!");
        exit(1);
    }
};

int main() {
    struct instruction ins[INSTRUCTIONS_SIZE];
    int nins = parse(ins), i = 0, j;
    int regs[] = { 12, 0, 0, 0 };
    while (i < nins) {
        printf("%d %d %d %d\n", regs[0], regs[1], regs[2], regs[3]);
        /* It would be nicer to generalise this and look ahead to match any
         * potential multiplication, but this single optimization is more than
         * enough for a fast solution. */
        if (i == 4) {
            regs[0] += regs[1] * regs[3];
            regs[2] = regs[3] = 0;
            i = 10;
            continue;
        }
        switch (ins[i].op) {
        case cpy:
            if (ins[i].args[1].type != regtype) {
                break; /* skip nonsense instructions */
            }
            regs[ins[i].args[1].val.reg] = read_arg(&ins[i].args[0], regs);
            break;
        case inc:
            if (ins[i].args[0].type != regtype) {
                break; /* skip nonsense instructions */
            }
            regs[ins[i].args[0].val.reg]++;
            break;
        case dec:
            if (ins[i].args[0].type != regtype) {
                break; /* skip nonsense instructions */
            }
            regs[ins[i].args[0].val.reg]--;
            break;
        case jnz:
            if (read_arg(&ins[i].args[0], regs)) {
                i += read_arg(&ins[i].args[1], regs);
                continue;
            }
            break;
        case tgl:
            j = i + read_arg(&ins[i].args[0], regs);
            if (0 <= j && j < nins) {
                toggle(&ins[j]);
            }
            break;
        }
        i++;
    }
    printf("\na: %d\n", regs[0]);
}
