package com.eidosmedia.javalab;

import java.text.NumberFormat;
import java.util.Locale;
import java.util.Scanner;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // https://stackoverflow.com/questions/13102045/scanner-is-skipping-nextline-after-using-next-or-nextfoo
        System.out.println("Insert the name: ");
        String name = scanner.nextLine().trim();

        System.out.println("Insert the principal: ");
        int principal = scanner.nextInt();

        System.out.println("Insert the Years of the loan: ");
        byte year = scanner.nextByte();

        System.out.println("Insert the annual interest: ");
        byte annualInterest = scanner.nextByte();

        // constant
        final byte MONTHS_IN_YEARS = 12;
        final byte PERCENT = 100;

        // operations
        int numberOfPayments = year * MONTHS_IN_YEARS;
        float monthlyInterestRate = ((float) annualInterest / PERCENT) / MONTHS_IN_YEARS;

        double monthlyPayment = principal * (
                monthlyInterestRate *
                        Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
                        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

        System.out.println(
                "Monthly Payment for" + name + ": " + NumberFormat
                        .getCurrencyInstance(Locale.ITALIAN)
                        .format(monthlyPayment)
        );
    }
}