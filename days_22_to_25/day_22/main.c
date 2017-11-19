#include <stdlib.h>
#include <stdio.h>
#include <ctype.h>
#include <stdio.h>
#include <stdlib.h>
#define GRID_X 30
#define GRID_Y 32
#define MAXMOVES 100
#define QUEUESIZE 1000000
#define INPUT_FORMAT "/dev/grid/node-x%d-y%d %dT %dT %*dT %*d%%\n"

typedef struct {
    int x;
    int y;
} Point;

typedef struct {
    Point from;
    Point to;
} Move;

Point points[GRID_X * GRID_Y];
int node_sizes[GRID_X][GRID_Y];

int point_eq(Point *a, Point *b) {
    return a->x == b->x && a->y == b->y;
}

void initialize_points() {
    for (int x = 0; x < GRID_X; x++) {
        for (int y = 0; y < GRID_Y; y++) {
            points[x * GRID_Y + y] = (Point) { x, y };
        }
    }
}

int is_viable_move(int nodes[][GRID_Y], Move *m) {
    int data = nodes[m->from.x][m->from.y];
    return !point_eq(&m->from, &m->to) && data > 0 &&
        data + nodes[m->to.x][m->to.y] <= node_sizes[m->to.x][m->to.y];
}

int count_viable_pairs(int nodes[][GRID_Y]) {
    int count = 0;
    for (int i = 0; i < GRID_X * GRID_Y; i++) {
        Point from = points[i];
        for (int j = 0; j < GRID_X * GRID_Y; j++) {
            Point to = points[j];
            Move move = (Move) { from, to };
            count += is_viable_move(nodes, &move);
        }
    }
    return count;
}

void parse(int nodes[][GRID_Y]) {
    int x, y, size, used;
    scanf("%*[^\n]\n%*[^\n]\n");
    while (scanf(INPUT_FORMAT, &x, &y, &size, &used) == 4) {
        nodes[x][y] = used;
        node_sizes[x][y] = size;
    }
}

int main() {
    int nodes[GRID_X][GRID_Y];
    initialize_points();
    parse(nodes);
    printf("Part 1: %d viable pairs\n\n", count_viable_pairs(nodes));
    int used, avail, min_used = 10000, max_avail = 0;
    for (int i = 0; i < GRID_X * GRID_Y; i++) {
        int x = points[i].x, y = points[i].y;
        used = nodes[x][y];
        avail = node_sizes[x][y] - used;
        if (used == 0) {
            continue; /* This is the "hole" */
        }
        if (used < min_used) {
            min_used = used;
        }
        if (avail > max_avail) {
            max_avail = avail;
        }
    }
    printf("Part 2: by hand based on the following map\n\n");
    for (int y = 0; y < GRID_Y; y++) {
        for (int x = 0; x < GRID_X; x++) {
            used = nodes[x][y];
            avail = node_sizes[x][y] - used;
            if (x == 0 && y == 0) {
                printf("O ");
            } else if (x == GRID_X - 1 && y == 0) {
                printf("G ");
            } else if (used == 0) {
                printf("_ ");
            } else if (used < 92) {
                printf(". ");
            } else {
                printf("# ");
            }
        }
        printf("\n");
    }
    exit(0);
}
