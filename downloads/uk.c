#include <stdio.h>
#include <gd.h>

#define WIDTH 600
#define HEIGHT 400

void drawUnionJack(gdImagePtr im) {
    // 蓝色背景
    int blue = gdImageColorAllocate(im, 0, 0, 255);
    gdImageFilledRectangle(im, 0, 0, WIDTH - 1, HEIGHT - 1, blue);

    // 白色横条
    int white = gdImageColorAllocate(im, 255, 255, 255);
    gdImageFilledRectangle(im, WIDTH / 4, HEIGHT / 8, WIDTH * 3 / 4, HEIGHT * 7 / 8, white);

    // 白色纵条
    gdImageFilledRectangle(im, WIDTH / 8, HEIGHT / 4, WIDTH * 7 / 8, HEIGHT * 3 / 4, white);
}

int main() {
    gdImagePtr img;
    FILE *outputFile;

    img = gdImageCreate(WIDTH, HEIGHT);
    if (!img) {
        printf("Cannot create image\n");
        return 1;
    }

    drawUnionJack(img);

    // 更改文件保存路径
    outputFile = fopen("./../images/uk.png", "wb");
    if (!outputFile) {
        printf("Cannot open file for writing\n");
        gdImageDestroy(img);
        return 1;
    }

    gdImagePng(img, outputFile);
    fclose(outputFile);
    gdImageDestroy(img);

    printf("Image created successfully\n");
    return 0;
}
