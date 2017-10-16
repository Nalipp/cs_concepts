def outer
  result = 'hi'

  def inner
    p result
  end

  inner
end

outer
