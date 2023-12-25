#include <stdio.h>

int main() {
    // 開啟文件以寫入位移和速度數據
    FILE *outputFile = fopen("motion_data.txt", "w");
    if (!outputFile) {
        fprintf(stderr, "無法創建數據文件。\n");
        return 1;
    }

    // 模擬運動 10 秒並計算位移和速度，同時將數據寫入文件
    double x = 0.2;  // 初始位移
    double v = 0.0;  // 初始速度
    double dt = 0.01; // 時間步長
    double t = 0.0;  // 時間

    while (t <= 10.0) {
        double acceleration = (-10.0 * x - 0.5 * v) / 1.0; // 這裡修改了系統的參數
        v += acceleration * dt;
        x += v * dt;

        fprintf(outputFile, "%lf %lf %lf\n", t, x, v);

        t += dt;
    }

    // 關閉數據文件
    fclose(outputFile);

    // 使用popen啟動Gnuplot進程
    FILE *gnuplotPipe = popen("./../images/gnuplot.png", "wb");
    if (!gnuplotPipe) {
        fprintf(stderr, "無法啟動Gnuplot。\n");
        return 1;
    }

    // 使用Gnuplot繪圖指令，指定字型文件和輸出PNG
    fprintf(gnuplotPipe, "set terminal png font 'Y:/wqy-microhei.ttc,10' size 800,400\n");
    fprintf(gnuplotPipe, "set output 'motion_plot.png'\n");
    fprintf(gnuplotPipe, "set title '位移和速度 vs. 時間'\n");
    fprintf(gnuplotPipe, "set xlabel '時間 (s)'\n");
    fprintf(gnuplotPipe, "set ylabel '位移 (m)'\n");
    fprintf(gnuplotPipe, "plot 'motion_data.txt' using 1:2 with lines lw 2 title '位移', \
                             'motion_data.txt' using 1:3 with lines lw 2 title '速度'\n");

    // 關閉Gnuplot進程
    fprintf(gnuplotPipe, "exit\n");
    pclose(gnuplotPipe);

    return 0;
}