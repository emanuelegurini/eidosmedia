package com.eidosmedia.javalab;

import java.text.NumberFormat;
import java.util.Locale;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {

        // constant
        final byte MONTHS_IN_YEARS = 12;
        final byte PERCENT = 100;

        // inputs
        int principal = 100000;
        byte year = 15;
        byte annualInterest = 6;

        // operations
        int numberOfPayments = year * MONTHS_IN_YEARS;
        float monthlyInterestRate = ((float) annualInterest / PERCENT) / MONTHS_IN_YEARS;

        double monthlyPayment = principal * (
                monthlyInterestRate *
                        Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
                        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

        System.out.println(
                "Monthly Payment : " + NumberFormat
                        .getCurrencyInstance(Locale.ITALIAN)
                        .format(monthlyPayment)
        );
    }
}