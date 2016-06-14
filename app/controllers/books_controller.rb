class BooksController < ApplicationController
    skip_before_filter :verify_authenticity_token

    def index
      @books = Book.where(user_id: current_user.id)
      respond_to do |format|
        format.html
        format.json { render :json => @books }
      end
    end

    def show
      @book = Book.find(params[:id])
      respond_to do |format|
        format.html
        format.json { render :json => @book}
      end
    end

    def create
      @book = Book.new(book_params)
      @book.user_id = current_user.id
      @book.save
      redirect_to root_path
    end

    def update
      @book = Book.find(params[:id])
      @book.update_attributes(book_params)
    end

    def destroy
      @book = Book.find(params[:id])
      @book.destroy
    end

    private

    def book_params
      params.require(:book).permit(:author, :review, :rating, :title)
    end

end
